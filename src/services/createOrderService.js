import axios from "axios";
import { createOrderTemplate } from "../templates/createOrderTemplate";
import { buildPackShipmentXML } from "../templates/packShipmentTemplate";
 
const CREATE_ORDER_URL =
    "/oms/smcfs/restapi/executeFlow/ALCreateOrderMagento_Sync";
 
export const createOrder = async (request) => {
 
    try {
 
        const xmlRequest = createOrderTemplate(request);
 
        console.log("Generated XML");
        console.log(xmlRequest);
 
        const response = await axios.post(
 
            CREATE_ORDER_URL,
 
            xmlRequest,
 
            {
 
                headers: {
 
                    "Content-Type": "application/xml",
                    "Accept": "application/xml"
 
                },
 
                auth: {
 
                    username: "admin",
                    password: "password"
 
                }
 
            }
 
        );
 
        return response.data;
 
    }
 
    catch (error) {
 
        console.error(error);
 
        if (error.response) {
 
            return error.response.data;
 
        }
 
        return error.message;
 
    }
}
    export const packShipment = async (request) => {
        try {
        const xml = buildPackShipmentXML(request);

        const response = await axios.post(

            "/oms/smcfs/restapi/executeFlow/ALILSPickPackAPI",
            xml,
            {
                headers: {
                    "Content-Type": "application/xml",
                    "Accept": "application/xml"
                },
                auth: {
                    username: "admin",
                    password: "password"
                }
            }
        );

        return response.data;

        }
        catch (error) {

            console.error(error);

            if (error.response) {

                return error.response.data;

            }

            return error.message;

        }
    };
 