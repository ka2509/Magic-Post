import React, { useState, useEffect } from "react";
import ProvinceServices from "../../services/ProvinceServices";
import DistrictServices from "../../services/DistrictServices";
import OrderServices from "../../services/OrderServices";
function CreateOrder() {
    const [formData, setFormData] = useState({
        sender_name: "",
        sender_province: "Ha Noi",
        sender_district: "Ba Dinh",
        sender_tel: "",
        sender_pos: "123",
        receiver_name: "",
        receiver_province: "Ha Noi",
        receiver_district: "Ba Dinh",
        receiver_tel: "",
        receiver_pos: "123",
        order_instruction: "cancel",
        type_order: "documents",
        special_services: "",
        cod: "0",
        order_weight: "0",
        business_note: "",
    });

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [receiverProvince,setReceiverProvince] = useState([]);
    const [receiverDistrict,setReceiverDistrict]= useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Fetch province services here and set the provinces state
        const fetchProvinces = async () => {
            try {
                const data = await ProvinceServices.getProvice();
                setProvinces(data.data);
                setReceiverProvince(data.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchProvinces();

        const fetchDistrict = async () => {
            try {
                const data = await DistrictServices.getDistrictFromProvice("01");
                setDistricts(data.data);
                setReceiverDistrict(data.data);
            } catch (err){
                console.error("Error fetching district:"+err )
            }
        }

        fetchDistrict();
    }, []);

    useEffect(()=>{
        // Fetch district services based on the selected province and set the districts state
        const fetchDistrict = async () => {
            try {
                const data = await DistrictServices.getDistrictFromProvice(formData.sender_province)
                setDistricts(data.data)
            } catch (error){
                console.error("Error fetching districts:", error);
            }
        }

        fetchDistrict();
    },[formData.sender_province])

    useEffect(()=>{
        // Fetch district services based on the selected province and set the districts state
        const fetchDistrict = async () => {
            try {
                const data = await DistrictServices.getDistrictFromProvice(formData.receiver_province)
                setReceiverDistrict(data.data)
            } catch (error){
                console.error("Error fetching districts:", error);
            }
        }

        fetchDistrict();
    },[formData.receiver_province])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setFormData({ ...formData, sender_province: selectedProvince });
        // Fetch district services based on the selected province and set the districts state
    }

    const handleReceiverDistrictChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleReceiverProvinceChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try{
            const result = await OrderServices.createOrder(formData);
            setSuccess(true);
            setError("");
        }catch (err){
            console.log(err)
            setError("Failed to create staff account");
            setSuccess(false);
        }
        // Handle form submission here
    }

    return (
        <div>
            <div>
                <h1>Create New Order</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                {success && <p>Create successfully</p>}
                <label>
                    Sender Name:
                    <input type="text" name="sender_name" value={formData.sender_name} onChange={handleChange} required/>
                </label>
                <label>
                    Sender Province:
                    <select name="sender_province" value={formData.sender_province} onChange={handleProvinceChange}>
                        {provinces.map((province) => (
                            <option key={province.id} value={province.name_en}>{province.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Sender District:
                    <select name="sender_district" value={formData.sender_district} onChange={handleChange}>
                        {districts.map((district) => (
                            <option key={district.id} value={district.name_en}>{district.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Sender Tel:
                    <input type="text" name="sender_tel" value={formData.sender_tel} onChange={handleChange} required/>
                </label>
                <label>
                    Receiver Name:
                    <input type="text" name="receiver_name" value={formData.receiver_name} onChange={handleChange}  required/>
                </label>
                <label>
                    Receiver Province:
                    <select name="receiver_province" value={formData.receiver_province} onChange={handleChange}>
                        {receiverProvince.map((province) => (
                            <option key={province.id} value={province.name_en}>{province.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Receiver District:
                    <select name="receiver_district" value={formData.receiver_district} onChange={handleChange}>
                        {receiverDistrict.map((district) => (
                            <option key={district.id} value={district.name_en}>{district.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Receiver Tel:
                    <input type="text" name="receiver_tel" value={formData.receiver_tel} onChange={handleChange} required/>
                </label>
                <label>
                    Order Instruction:
                    <select type="text" name="order_instruction" value={formData.order_instruction} onChange={handleChange}>
                            <option key="cancel" value="cancel">Cancel</option>
                            <option key="send_back_immediately" value="send_back_immediately">Send Back Immediately</option>
                            <option key="send_back_inday" value="send_back_inday">Send Back Within The Same Day</option>
                            <option key="call_sender" value="call_sender">Call The Sender</option>
                            <option key="send_back_expired" value="send_back_expired">Send Back When Expired</option>
                    </select>
                </label>
                <label>
                    Type Order:
                    <select type="text" name="type_order" value={formData.type_order} onChange={handleChange} >
                            <option key="documents" value="documents">Document</option>
                            <option key="goods" value="goods">Good</option>
                    </select>                    
                </label>
                <label>
                    Special Services:
                    <input type="text" name="special_services" value={formData.special_services} onChange={handleChange} />
                </label>
                <label>
                    COD:
                    <input type="number" name="cod" value={formData.cod} onChange={handleChange} />
                </label>
                <label>
                    Order Weight:
                    <input type="number" name="order_weight" value={formData.order_weight} onChange={handleChange} required/>
                </label>
                <label>
                    Business Note:
                    <input type="text" name="business_note" value={formData.business_note} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateOrder;