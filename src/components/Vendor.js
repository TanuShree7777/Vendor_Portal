import React from "react";
import { Form, Field } from "react-final-form";

const Vendor = () => {
  const onSubmit = () => {};
  return (
    <>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="right_sec">
                <main className="container-fluid">
                  <div className="form_right_sec">
                    <div className="row Organization-form">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field name="org_name">
                                {({ input, meta }) => (
                                  <div>
                                    <label>Org Name</label>
                                    <input
                                      type="text"
                                      {...input}
                                      placeholder="Name"
                                      className="form-control"
                                    />
                                    {meta.touched && meta.error && (
                                      <span style={{ color: "red" }}>
                                        {meta.error}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Field>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field name="formalName">
                                {({ input, meta }) => (
                                  <div>
                                    <label>Friendly Name</label>
                                    <input
                                      type="text"
                                      {...input}
                                      placeholder="Friendly Name"
                                      className="form-control"
                                    />
                                    {meta.touched && meta.error && (
                                      <span style={{ color: "red" }}>
                                        {meta.error}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div className="address_area">
                          <h3>Contact</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <p className="d-flex justify-content-end optional_text">
                                {"(Optional)"}
                              </p>
                              <div className="form-group">
                                <Field name="address">
                                  {({ input, meta }) => (
                                    <div>
                                      <label>Address</label>
                                      <input
                                        type="text"
                                        {...input}
                                        placeholder="Address"
                                        className="form-control"
                                      />
                                      {meta.touched && meta.error && (
                                        <span style={{ color: "red" }}>
                                          {meta.error}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <Field name="email">
                                  {({ input, meta }) => (
                                    <div>
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        {...input}
                                        placeholder="Email"
                                        className="form-control"
                                      />
                                      {meta.touched && meta.error && (
                                        <span style={{ color: "red" }}>
                                          {meta.error}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p className="d-flex justify-content-end optional_text">
                                {"(Optional)"}
                              </p>
                              <div className="form-group">
                                <Field name="contact_number">
                                  {({ input, meta }) => (
                                    <div>
                                      <label>Contact</label>
                                      <input
                                        type="text"
                                        {...input}
                                        placeholder="Contact"
                                        className="form-control"
                                      />
                                      {meta.touched && meta.error && (
                                        <span style={{ color: "red" }}>
                                          {meta.error}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>
                            </div>
                          </div>
                          <div className="btn_area"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </form>
          );
        }}
      />
    </>
  );
};

export default Vendor;
