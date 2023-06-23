
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import { useMaterialUIController, setLoginAuth } from "context";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm  } from "react-hook-form";
import { useState } from "react";
import MDButton from "components/MDButton";
import axios from "axios";

function Login(props) {
  const [controller, dispatch] = useMaterialUIController();
  const { sidenavColor, } = controller;
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
  const [messenger, setMessenger] = useState("");
  const onSubmit = item => {
    axios.post('http://localhost:8080/login', item)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("loginAuth",JSON.stringify(response.data))
        setMessenger("");
        setLoginAuth(dispatch, response.data)
        window.location="/";
      })
      .catch(error => {
        setMessenger(error.response.data.information);
      });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="div">
        <Container className="my-5" >
          <Row className=" d-flex justify-content-center align-items-center">
            <Col md={12} lg={8} xs={12}>
              <Card className="shadow bg-transparent">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">ログイン</h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="Login">
                          <Form.Label className="text-center">
                            メールアドレス
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="メールアドレスを入力してください。"
                            className={`${errors.email ? 'border border-danger' : 'border border-success'}`}
                            {...register("email", {
                              required: "メールアドレスを入力してください。",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "有効なメールアドレスを入力してください。",
                              },
                            })}
                          />
                        </Form.Group>

                        <div className='text-danger fw-light mb-3 mt-1'>{errors.email && errors.email.message}</div>
                        <Form.Group
                          className="mb-3"
                          controlId="password"
                        >
                          <Form.Label>パスワード</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="パスワードを入力してください。"
                            {...register("password", {
                              required: "パスワードを入力してください。",
                              pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "アルファベットと番号のみです。",
                              },
                              validate: {
                                length: (value) => {
                                  if (value.length < 6 || value.length > 25) {
                                    return "パスワードは6文字以上25文字以下である必要があります。";
                                  }
                                },
                              },
                            })}
                          />
                        </Form.Group>
                        <div className='text-danger fw-light mb-3 mt-1'>{errors.password && errors.password.message}</div>
                        {messenger && <div className='alert alert-danger'> {messenger}</div>}
                        <div className="d-grid">
                          <MDButton color={sidenavColor} type="submit" disabled={Object.keys(errors).length > 0}>
                            ログイン
                          </MDButton>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </MDTypography>
      <Footer />
    </DashboardLayout>
  );
}

export default Login;
