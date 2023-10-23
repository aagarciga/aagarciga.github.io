// Text styles
const bgColor = "#f5f5f5";
const fontColor = "#ff5100";

// Message
const greeting = `Hola Mundo!`;
const message1 = `\tI'm Alex, a software engineer with over a decade of   
\texperience continuously honing my skills in crafting  
\telegant code, designing user-friendly interfaces, and 
\toptimizing algorithms.`;
const message2 = `\tI'm passionate about leveraging technology to make
\ta positive impact and share my expertise and      
\tcreativity.`;

const message3 = `\tI look forward to connecting with you dear fellow 
\tdeveloper!                                        
\tThank you for visiting the console too.`;

// Log with styles
console.log(
  `%c ${greeting}`,
  `color: ${bgColor}; background: ${fontColor}; font-size: 64px`
);
console.log(
  `%c ${message1}`,
  `color: ${fontColor}; background: ${bgColor}; font-size: 16px`
);
console.log(
  `%c ${message2}`,
  `color: ${fontColor}; background: ${bgColor}; font-size: 16px`
);
console.log(
  `%c ${message3}`,
  `color: ${fontColor}; background: ${bgColor}; font-size: 16px`
);
