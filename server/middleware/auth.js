import jwt from 'jsonwebtoken';

// want to like a post click then check through middleware for permissions
// after middleware the like controller can be called

const auth = async (req, res, next) => {
    try{
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;