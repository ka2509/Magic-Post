import React, { useState, useEffect } from "react";
import ProvinceServices from "../../services/ProvinceServices";
import DistrictServices from "../../services/DistrictServices";
import OrderServices from "../../services/OrderServices";
import './CreateOrder.css'

function CreateOrder() {
    const [formData, setFormData] = useState({
        sender_name: "",
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
    const [receiverProvince, setReceiverProvince] = useState([]);
    const [receiverDistrict, setReceiverDistrict] = useState([]);
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
            } catch (err) {
                console.error("Error fetching district:" + err)
            }
        }

        fetchDistrict();
    }, []);

    useEffect(() => {
        // Fetch district services based on the selected province and set the districts state
        const fetchDistrict = async () => {
            try {
                const data = await DistrictServices.getDistrictFromProvice(formData.sender_province)
                setDistricts(data.data)
            } catch (error) {
                console.error("Error fetching districts:", error);
            }
        }

        fetchDistrict();
    }, [formData.sender_province])

    useEffect(() => {
        // Fetch district services based on the selected province and set the districts state
        const fetchDistrict = async () => {
            try {
                const data = await DistrictServices.getDistrictFromProvice(formData.receiver_province)
                setReceiverDistrict(data.data)
            } catch (error) {
                console.error("Error fetching districts:", error);
            }
        }

        fetchDistrict();
    }, [formData.receiver_province])

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
        try {
            const result = await OrderServices.createOrder(formData);
            setSuccess(true);
            setError("");
            window.location.href = "/staff";
            window.open("/order/"+result.data.idOrder)
        } catch (err) {
            console.log(err)
            setError("Failed to create staff account");
            setSuccess(false);
        }
        // Handle form submission here
    }

    return (
        <div className="createForm">
            <div>
                <h1>Create New Order</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Sender Name:
                </label>
                <input type="text" name="sender_name" value={formData.sender_name} onChange={handleChange} required />
                <label>
                    Sender Tel:
                </label>
                <input type="text" name="sender_tel" value={formData.sender_tel} onChange={handleChange} required />
                <label>
                    Receiver Name:
                </label>
                <input type="text" name="receiver_name" value={formData.receiver_name} onChange={handleChange} required />
                <label>
                    Receiver Province:
                </label>
                <select name="receiver_province" value={formData.receiver_province} onChange={handleChange}>
                    {receiverProvince.map((province) => (
                        <option key={province.id} value={province.name_en}>{province.name}</option>
                    ))}
                </select>
                <label>
                    Receiver District:
                </label>
                <select name="receiver_district" value={formData.receiver_district} onChange={handleChange}>
                    {receiverDistrict.map((district) => (
                        <option key={district.id} value={district.name_en}>{district.name}</option>
                    ))}
                </select>
                <label>
                    Receiver Tel:
                </label>
                <input type="text" name="receiver_tel" value={formData.receiver_tel} onChange={handleChange} required />
                <label>
                    Order Instruction:
                </label>
                <select type="text" name="order_instruction" value={formData.order_instruction} onChange={handleChange}>
                    <option key="cancel" value="cancel">Cancel</option>
                    <option key="send_back_immediately" value="send_back_immediately">Send Back Immediately</option>
                    <option key="send_back_inday" value="send_back_inday">Send Back Within The Same Day</option>
                    <option key="call_sender" value="call_sender">Call The Sender</option>
                    <option key="send_back_expired" value="send_back_expired">Send Back When Expired</option>
                </select>
                <label>
                    Type Order:
                </label>
                <select type="text" name="type_order" value={formData.type_order} onChange={handleChange} >
                    <option key="documents" value="documents">Document</option>
                    <option key="goods" value="goods">Good</option>
                </select>
                <label>
                    Special Services:
                </label>
                <input type="text" name="special_services" value={formData.special_services} onChange={handleChange} />
                <label>
                    COD:
                </label>
                <input type="number" name="cod" value={formData.cod} onChange={handleChange} />
                <label>
                    Order Weight:
                </label>
                <input type="number" name="order_weight" value={formData.order_weight} onChange={handleChange} required />
                <label>
                    Business Note:
                </label>
                <input type="text" name="business_note" value={formData.business_note} onChange={handleChange} />
                <p></p>
                <p></p>
                <p></p>
                <button type="submit">Submit</button>
            </form>
            {error && <p>{error}</p>}
            {success && <p>Create successfully</p>}
        </div>
    );
}

export default CreateOrder;