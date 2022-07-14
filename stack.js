const scence = new THREE.Scene()


let i = 1


// const geo = new THREE.BoxGeometry(3,1,3)
// const material = new THREE.MeshLambertMaterial({color: 0xC5B4E3})
// const mesh = new THREE.Mesh(geo, material)
// mesh.position.set(0,0,0)
// scence.add(mesh)

// const geo2 = new THREE.BoxGeometry(3,1,3)
// const material2 = new THREE.MeshLambertMaterial({color: 0xff0000})
// const mesh2 = new THREE.Mesh(geo, material2)
// mesh2.position.set(0,1,0)
// scence.add(mesh2)




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


window.addEventListener('click', () => {
    
    const geo2 = new THREE.BoxGeometry(3,1,3)
    const material2 = new THREE.MeshLambertMaterial({color: 0x00ffee})
    const mesh2 = new THREE.Mesh(geo2, material2)
    mesh2.position.set(0,i-2,0)
    i += 1
    scence.add(mesh2)
    renderer.render(scence, camera);
    

})

