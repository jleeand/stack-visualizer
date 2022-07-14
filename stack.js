
const scence = new THREE.Scene()

const geo = new THREE.BoxGeometry(3,1,3)
const material = new THREE.MeshLambertMaterial({color: 0xC5B4E3})
const mesh = new THREE.Mesh(geo, material)
mesh.position.set(0,0,0)
scence.add(mesh)


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scence.add(ambientLight);const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0);
scence.add(dirLight);

const aspect = window.innerWidth / window.innerHeight;
const width = 10;
const height = width / aspect;
const camera = new THREE.OrthographicCamera(
width / -2, // left
width / 2, // right
height / 2, // top
height / -2, // bottom
0, // near plane
100 // far plane
);camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scence, camera);

document.body.appendChild(renderer.domElement);