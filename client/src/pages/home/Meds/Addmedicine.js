import { useState } from 'react';
import axios from 'axios';
import { FormWrap, FormContent, Form, FormInput, FormLabel, FormButton, FormH1 } from '../customerStyle';

const AddMedicine = () => {
  const [medData, setMedData] = useState({
    med_name: '',
    qty_left: 0,
    med_cost: 0,
    exp_date: '',
    med_mfg: '',
    rac_loc: '',
    mfg_date: ''
  });

  const handleChange = (e) => {
    setMedData({
      ...medData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:1300/medicines/stock/insert', medData);
      if (response.data) {
        alert('Medicine added successfully!');
        // Clear form
        setMedData({
          med_name: '',
          qty_left: 0,
          med_cost: 0,
          exp_date: '',
          med_mfg: '',
          rac_loc: '',
          mfg_date: ''
        });
      }
    } catch (error) {
      alert('Error adding medicine: ' + error.message);
    }
  };

  return (
    <FormWrap>
      <FormContent>
        <Form>
          <FormH1>Add New Medicine</FormH1>
          
          <FormLabel>Medicine Name</FormLabel>
          <FormInput 
            name="med_name"
            value={medData.med_name}
            onChange={handleChange}
            required
          />

          <FormLabel>Quantity</FormLabel>
          <FormInput 
            type="number"
            name="qty_left"
            value={medData.qty_left}
            onChange={handleChange}
            required
          />

          <FormLabel>Cost</FormLabel>
          <FormInput 
            type="number"
            name="med_cost"
            value={medData.med_cost}
            onChange={handleChange}
            required
          />

          <FormLabel>Expiry Date</FormLabel>
          <FormInput 
            type="date"
            name="exp_date"
            value={medData.exp_date}
            onChange={handleChange}
            required
          />

          <FormLabel>Manufacturer</FormLabel>
          <FormInput 
            name="med_mfg"
            value={medData.med_mfg}
            onChange={handleChange}
            required
          />

          <FormLabel>Rack Location</FormLabel>
          <FormInput 
            name="rac_loc"
            value={medData.rac_loc}
            onChange={handleChange}
            required
          />

          <FormLabel>Manufacturing Date</FormLabel>
          <FormInput 
            type="date"
            name="mfg_date"
            value={medData.mfg_date}
            onChange={handleChange}
            required
          />

          <FormButton onClick={handleSubmit}>Add Medicine</FormButton>
        </Form>
      </FormContent>
    </FormWrap>
  );
};

export default AddMedicine;
