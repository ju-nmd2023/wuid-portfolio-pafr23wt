let waterTankX = 100;
let waterTankY = 100;

let waterDropX = 100;
let waterDropY = 100;

//watertank
noStroke();
fill(121, 205, 244);
ellipse(waterTankX + 100, waterTankY + 55, 70, 80);

ellipse(waterTankX + 100, waterTankY + 80, 70, 20);
ellipse(waterTankX + 100, waterTankY + 90, 70, 20);
ellipse(waterTankX + 100, waterTankY + 100, 70, 20);
ellipse(waterTankX + 100, waterTankY + 110, 70, 20);
ellipse(waterTankX + 100, waterTankY + 120, 70, 20);
ellipse(waterTankX + 100, waterTankY + 130, 70, 20);
ellipse(waterTankX + 100, waterTankY + 140, 70, 20);
rect(waterTankX + 65, waterTankY + 142, 70, 20, 20);

//lid
fill(187, 189, 191);
rect(waterTankX + 85, waterTankY, 30, 20);

//lid stripes
fill(0, 0, 0);
rect(waterTankX + 88, waterTankY, 1, 20);
rect(waterTankX + 91, waterTankY, 1, 20);
rect(waterTankX + 94, waterTankY, 1, 20);
rect(waterTankX + 97, waterTankY, 1, 20);

//white reflection
fill(255, 255, 255);
ellipse(waterTankX + 95, waterTankY + 55, 50, 60);
fill(121, 205, 244);
ellipse(waterTankX + 98, waterTankY + 55, 50, 70);

//waterdrop
noStroke();
fill(121, 205, 244);
ellipse(waterDropX + 250, waterDropY + 55, 20, 40);

//reflection
fill(255, 255, 255);
ellipse(waterDropX + 248, waterDropY + 55, 10, 30);
fill(121, 205, 244);
ellipse(waterDropX + 250, waterDropY + 55, 10, 30);
