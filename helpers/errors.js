 function errorHandler(handler) {
     return async(next) => {
         try {
             await handler();
         } catch (ex) {
             console.error({ "Error": { " message": ex.message } })
             next(ex.message);
         }
     };
 }
 module.exports = { errorHandler }