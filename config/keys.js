if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {

    module.exports = require('./dev');
}

// mongodb+srv://akg136:<password>@emailyclusterprod-8mghn.mongodb.net/test?retryWrites=true&w=majority
// 1056111549464-ik6jgtn1sh5vuonh7bcf3etq16o5uhv4.apps.googleusercontent.com
// wVcUeKl8TGrcTyJ1WaQXApl2
