import express from 'express'
import dotenv from 'dotenv';
dotenv.config()
const app=express()

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.get('/UserDetails',(req, res)=>{
    const UserDetails=[
        {
            id:1,
            name:'John Doe',
            Number:'123456789',
            email:'john.doe@example.com',
            company:'ABC Corp',
        },
        {
            id:2,
            name:'Jane Smith',
            Number:'987654321',
            email:'jane.smith@example.com',
            company:'XYZ Inc',
        },
        {
            id:3,
            name:'Alice Johnson',
            Number:'456789123',
            email:'alice.johnson@example.com',
            company:'LMN Ltd',
        },
        {
            id:4,
            name:'Bob Brown',
            Number:'321654987',
            email:'bob.brown@example.com',
            company:'OPQ LLC',
        },
        {
            id:5,
            name:'Charlie Davis',
            Number:'159753486',
            email:'charlie.davis@example.com',
            company:'RST Corp',
        },
        {
            id:6,
            name:'Eve White',
            Number:'753159486',
            email:'eve.white@example.com',
            company:'UVW Inc',
        }

    ];
    res.send(UserDetails);

});

const port=process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`Serve at ${port}`);    
});