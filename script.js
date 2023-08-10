const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  const encodedData = encoder.encode(str);
  return encodedData.length;
}; 
 
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
