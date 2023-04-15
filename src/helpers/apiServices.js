import axios from 'axios';

const baseURL = 'https://pin-backend-production-9c43.up.railway.app/contactos';

export const sendMessage = async (values) => {
     const response = await axios({
          method: 'POST',
          url: baseURL,
          data: values,
     })
          .then((res) => res.data)
          .catch((error) => console.log(error));

     return response;
};
