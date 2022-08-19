import React from 'react';

const CreateClient = ({ onChangeForm, createClient, refreshFields }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <h2>Create Appointment</h2>
          <form>
            <div className='row'>
              <div className='form-group '>
                <label htmlFor='exampleInputEmail1'>Service</label>
                <input
                  type='text'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='service'
                  id='service'
                  aria-describedby='emailHelp'
                  placeholder='Service'
                />
              </div>
              <div className='form-group '>
                <label htmlFor='exampleInputEmail1'>Date</label>
                <input
                  type='date'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='date'
                  id='date'
                />
              </div>
              <div className='form-group '>
                <label htmlFor='exampleInputEmail1'>Time</label>
                <input
                  type='time'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='time'
                  id='time'
                  min='07:00:00'
                  max='18:00:00'
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='exampleInputEmail1'>First Name</label>
                <input
                  type='text'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='firstname'
                  id='firstname'
                  aria-describedby='emailHelp'
                  placeholder='First Name'
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='exampleInputPassword1'>Last Name</label>
                <input
                  type='text'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='lastname'
                  id='lastname'
                  placeholder='Last Name'
                />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-md-12'>
                <label htmlFor='exampleInputEmail1'>Email</label>
                <input
                  type='text'
                  onChange={(e) => onChangeForm(e)}
                  className='form-control'
                  name='email'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Email'
                />
              </div>
            </div>
            <button
              type='button'
              onClick={() => createClient()}
              className='btn btn-danger mt-2 mb-2'
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
