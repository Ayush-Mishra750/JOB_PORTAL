import {PrismaClient} from "@prisma/client" 

const database=new PrismaClient();

const main=async()=>{
    try {
        await database.category.createMany({
          data:[
            {name:"Software Development"},
            {name:"Full-Stack Development"},
          {name:"MERN stack Developer"},
            {name:"Mobile App Development"},
            {name:"Game Development"},
            {name:"Data Science"},
            {name:"Machine Leaning"},
            {name:"Artificial Intelligence"},
            {name:"UI/UX Design"},
            {name:"Product Management"},
            {name:"Project Management"},
            {name:"Quality Assurance"},
            {name:"DevOps"},
            {name:"CyberSecurity"},
            {name:"Cloud Computing"},
            {name:"Database Administration"},
            {name:"Data Analysis"},
            {name:"Graphic Development"},
            {name:"Java Developer"},


          ]
        });
        console.log("success");
    } catch (error) {
        console.log("error",error);
    }
}
main();