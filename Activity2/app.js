import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:      "PUP",
    para1:      "Welcome to our adorable dog website! Its where wagging tails meet friendly faces Dive into a world of fluffy fun expert tips and heart melting stories about our four legged pals.",
    myImage:    "dog.jpg",
}

const{ title1,  para1,  myImage,} = data

container.append(leftdiv(title1,  para1))
container.append(rightDiv( myImage))