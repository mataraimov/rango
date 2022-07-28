const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera(30,window.innerWidth/ window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xBDB76B);
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z=10;
camera.position.x=0;
camera.position.y=0;
const points=[
  new THREE.Vector2(0,0),
  new THREE.Vector3(1,1),
  new THREE.Vector2(-6,-2),
  
  
]

const material=new THREE.LineBasicMaterial({color: 0xBDB76B});
const geometryLine=new THREE.BufferGeometry().setFromPoints(points);
const line=new THREE.Line(geometryLine,material);
// scene.add(line);

// const material1=new THREE.MeshBasicMaterial({color: 0x9400D3});
const texture=new THREE.TextureLoader().load('texture/box.jpeg')
const material1=new THREE.MeshBasicMaterial({map:texture})
const cubegeometry=new THREE.BoxGeometry(2,2,2);
const cube=new THREE.Mesh(cubegeometry,material1);
scene.add(cube);

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x+=0.03;
  cube.rotation.y-=0.03;
  cube.rotation.z+=0.03;
}
animate()