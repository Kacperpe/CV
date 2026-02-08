const canvas = document.getElementById('mouse-canvas'), ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null }, lastMouse = { x: null, y: null }, speed = 0, rays = [];

window.addEventListener('mousemove', e => {
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;
    mouse.x = e.x;
    mouse.y = e.y;
    if (lastMouse.x) speed = Math.sqrt(Math.pow(mouse.x - lastMouse.x, 2) + Math.pow(mouse.y - lastMouse.y, 2));
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Ray {
    constructor(x, y, angle) {
        Object.assign(this, { x, y, angle });
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 2 + 1;
        this.opacity = 1;
    }
    update() {
        this.length = Math.max(0, this.length - this.speed);
        this.opacity -= 0.01;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.cos(this.angle) * this.length, this.y + Math.sin(this.angle) * this.length);
        ctx.strokeStyle = `rgba(107, 155, 209, ${this.opacity})`;
        ctx.stroke();
    }
}

(function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) rays.push(new Ray(mouse.x, mouse.y, Math.random() * Math.PI * 2));

    rays = rays.filter(ray => {
        ray.update();
        return ray.opacity > 0;
    });

    let circleRadius = Math.max(20, 100 - speed * 2);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, circleRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(107, 155, 209, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    speed *= 0.95;
})();
