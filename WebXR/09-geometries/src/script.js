import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
//import { Float32BufferAttribute } from 'three'
const canvas = document.querySelector('.webgl');
// Scene 
const scene = new THREE.Scene()
 
// Sizes 
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 8
scene.add(camera)
// Geometry 
const geometry = new THREE.BufferGeometry()
const vertices = [0,0,0,0,2,0,0,0,2]

const indices = [0, 1, 2]
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices,3))
//geometry.setIndex(indices)
console.log("Hello1")
const material = new THREE.MeshBasicMaterial({
    color:0x00ff00,
    side:THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
})
// Mesh 
console.log("Hello1")
const mesh  = new THREE.Mesh(geometry,material)
scene.add(mesh)
const controls = new OrbitControls(camera,canvas)


console.log("Hello1")
// render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
console.log("Hello1")
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()