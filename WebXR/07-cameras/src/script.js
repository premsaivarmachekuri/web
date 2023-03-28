import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import { AxesHelper } from 'three'

/**
 * Base
 */
// Canvas
const cursor = {
    x:0,
    y:0
}
const canvas = document.querySelector('canvas.webgl')
window.addEventListener('mousemove', (event)=> {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)
})
// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5
        , 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 10
//camera.lookAt(mesh.position)
scene.add(camera)
//Controls 
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.target.y = 1
// controls.update()
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//mesh.position.normalize()
// Animate
let newone = new THREE.AxesHelper(5)
scene.add(newone)
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    //Update objects 
    mesh.rotation.y = elapsedTime * Math.PI * 2
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.z = Math.tan(elapsedTime)
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5 
    camera.lookAt(mesh.position)
    // Render
    // Update Controls 
    
    controls.update()
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()