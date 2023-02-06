import React from 'react'

const Vendor = () => {
  return (
    <>
    <Form
      initialValues={(e) => setInitials(e)}
      onSubmit={onSubmit}
      // validate={validate}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="right_sec">
              <main className="container-fluid">
                <div className="form_right_sec">
                  {myPath.pathname === "/org/create" ? (
                    <h2>Create Organization</h2>
                  ) : (
                    <h2>Detail View Organization</h2>
                  )}
                  <div className="row Organization-form">
                    <div className="col-md-6">
                      <div className="row">
                        {myPath.pathname === "/org/create" ? (
                          <h3 className="form_heading">Create</h3>
                        ) : (
                          <h3 className="form_heading">Update</h3>
                        )}
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
                        <div className="btn_area">
                          {!id ? (
                            <div className="create_btn_div">
                              <Link
                                to={"/organization"}
                                className="btn cancel_btn cancel"
                                type="reset"
                              >
                                Cancel
                              </Link>

                              <button
                                className="btn create"
                                type="submit"
                                disabled={submitting}
                              >
                                Create
                              </button>
                            </div>
                          ) : (
                            <div className="update_btn_div">
                              <button
                                className="btn cancel_btn remove"
                                type="reset"
                                // onClick={handleDelete}
                                onClick={modalOpen}
                              >
                                REMOVE
                              </button>
                              <button className="btn create" type="submit">
                                UPDATE
                              </button>
                            </div>
                          )}
                        </div>
                        {myPath.pathname === "/org/create" ? (
                          <CommonModal open={show} onClose={modalClose} />
                        ) : (
                          ""
                        )}

                        {myPath.pathname === `/org/viewupdate/${id}` ? (
                          <DeleteModal
                            open={show}
                            onClose={modalClose}
                            // handleDelete={handleDelete}
                          />
                        ) : (
                          ""
                        )}
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
  </>  )
}

export default Vendor