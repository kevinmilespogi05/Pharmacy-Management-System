import {useState} from 'react';
import {FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'
import Swal from 'sweetalert2'

const Searchmedicine = () => {
  const [sr_no, setSr_no] = useState(0);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const Searchmedicin = async () => {
    if (!sr_no) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please enter a valid serial number',
      });
      return;
    }

    try {
      const res = await axios.post('http://localhost:1300/medicines/stock/search', {
        sr_no: sr_no,
      });

      if (res.data && res.data[0]) {
        const medicine = res.data[0];
        
        Swal.fire({
          icon: 'success',
          title: 'Medicine Found',
          html: `
            <div style="text-align: left; padding: 10px;">
              <div style="margin: 10px 0;">
                <strong>Medicine Name:</strong> ${medicine.med_name}
              </div>
              <div style="margin: 10px 0;">
                <strong>Quantity Left:</strong> ${medicine.qty_left} units
              </div>
              <div style="margin: 10px 0;">
                <strong>Price:</strong> $${medicine.med_cost}
              </div>
              <div style="margin: 10px 0;">
                <strong>Expiry Date:</strong> ${formatDate(medicine.exp_date)}
              </div>
              <div style="margin: 10px 0;">
                <strong>Manufacturing Date:</strong> ${formatDate(medicine.mfg_date)}
              </div>
              <div style="margin: 10px 0;">
                <strong>Location on Rack:</strong> ${medicine.rac_loc}
              </div>
              <div style="margin: 10px 0;">
                <strong>Manufacturer:</strong> ${medicine.med_mfg}
              </div>
            </div>
          `,
          customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            content: 'custom-swal-content'
          },
          showConfirmButton: true,
          confirmButtonColor: '#038ea1',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Not Found',
          text: 'Medicine not found in database',
          confirmButtonColor: '#038ea1',
        });
      }
    } catch (error) {
      console.error("Error searching medicine:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while searching for the medicine',
        confirmButtonColor: '#038ea1',
      });
    }
  };

  return (
    <FormWrap>
      <FormContent>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormH1>Search Medicine</FormH1>
          <FormLabel>Serial Number</FormLabel>
          <FormInput
            type='number'
            required
            value={sr_no}
            onChange={(event) => setSr_no(event.target.value)}
            placeholder="Enter serial number"
          />
          <FormButton type="button" onClick={Searchmedicin}>
            Search
          </FormButton>
        </Form>
      </FormContent>
    </FormWrap>
  );
};

export default Searchmedicine;

