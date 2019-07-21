const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/doctorDetail', (req, res) => {
    const name = "Dr. Shravan Dixit";
    const degree = "MS - ENT, DNB - ENT, MRCS(UK)";
    const speciality = "Ent & Head Neck Surgeon";
    const imgUrl = "http://gomerblog.com/wp-content/uploads/2015/08/42836785_m.jpg"
    const intro = `Dr. Shravan is a ENT/Head and Neck Surgeon currently heading
    the integrated Head and Neck services at Healthway Clinic.He
    graduated in Medicine from Bangalore Medical College and post
    graduation in ENT from the same institute.He underwent...`
    const mobile = "7992356845"

    res.send({
        doctors: [{ name, degree, speciality, imgUrl, intro, mobile }]
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up!');
})
