import './App.css'
function App() {

  return (
    <>
    <nav>
      <div className='container'>
        <div className="logo">
        </div>
        <div className="links">
          <div>
          <div className="link">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8.57104C16 10.7802 14.2091 12.571 12 12.571C9.79086 12.571 8 10.7802 8 8.57104C8 6.36191 9.79086 4.57104 12 4.57104C14.2091 4.57104 16 6.36191 16 8.57104ZM14.5 8.57104C14.5 9.95176 13.3807 11.071 12 11.071C10.6193 11.071 9.5 9.95176 9.5 8.57104C9.5 7.19033 10.6193 6.07104 12 6.07104C13.3807 6.07104 14.5 7.19033 14.5 8.57104Z" fill="#141C24"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 18.343V20.571H20V18.343C20 16.6757 18.9657 15.1832 17.4045 14.5977L17.2669 14.5461C13.8711 13.2727 10.1289 13.2727 6.73315 14.5461L6.59551 14.5977C5.03429 15.1832 4 16.6757 4 18.343ZM7.25984 15.9506C10.316 14.8045 13.684 14.8045 16.7402 15.9506L16.8778 16.0022C17.8536 16.3681 18.5 17.3009 18.5 18.343V19.071H5.5V18.343C5.5 17.3009 6.14643 16.3681 7.12219 16.0022L7.25984 15.9506Z" fill="#141C24"/>
            </svg>
            Профиль
          </div>
          <div className="link">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9239 16.6948C16.2375 16.4097 16.2492 15.9202 15.9494 15.6205L12.7 12.371V7.32104C12.7 6.90683 12.3642 6.57104 11.95 6.57104C11.5358 6.57104 11.2 6.90683 11.2 7.32104V12.5568C11.2 12.822 11.3054 13.0764 11.4929 13.2639L14.8994 16.6705C15.1797 16.9507 15.6306 16.9614 15.9239 16.6948Z" fill="#141C24"/>
            <path d="M12 22.571C10.6333 22.571 9.34167 22.3085 8.125 21.7835C6.90833 21.2585 5.84583 20.5419 4.9375 19.6335C4.02917 18.7252 3.3125 17.6627 2.7875 16.446C2.2625 15.2294 2 13.9294 2 12.546C2 11.1794 2.2625 9.88771 2.7875 8.67105C3.3125 7.45438 4.02917 6.39605 4.9375 5.49605C5.84583 4.59605 6.90833 3.88354 8.125 3.35854C9.34167 2.83354 10.6417 2.57104 12.025 2.57104C13.3917 2.57104 14.6833 2.83354 15.9 3.35854C17.1167 3.88354 18.175 4.59605 19.075 5.49605C19.975 6.39605 20.6875 7.45438 21.2125 8.67105C21.7375 9.88771 22 11.1877 22 12.571C22 13.9377 21.7375 15.2294 21.2125 16.446C20.6875 17.6627 19.975 18.7252 19.075 19.6335C18.175 20.5419 17.1167 21.2585 15.9 21.7835C14.6833 22.3085 13.3833 22.571 12 22.571ZM12 21.071C14.3667 21.071 16.375 20.2419 18.025 18.5835C19.675 16.9252 20.5 14.921 20.5 12.571C20.5 10.2044 19.675 8.19604 18.025 6.54604C16.375 4.89604 14.3667 4.07104 12 4.07104C9.65 4.07104 7.64583 4.89604 5.9875 6.54604C4.32917 8.19604 3.5 10.2044 3.5 12.571C3.5 14.921 4.32917 16.9252 5.9875 18.5835C7.64583 20.2419 9.65 21.071 12 21.071Z" fill="#141C24"/>
            </svg>
              Заказы
          </div>
          </div>
          <div>
          <div className="link">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.85791 4.40289H4.54208C5.29445 4.40289 5.67063 4.40289 5.95385 4.6072C6.23707 4.81151 6.35598 5.16823 6.59379 5.88168L7.18185 7.64585" stroke="#141C24" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17.9917 18.4557H7.77636C7.61962 18.4557 7.5407 18.4557 7.48017 18.4492C7.33008 18.4325 7.18516 18.3845 7.05476 18.3083C6.92435 18.2321 6.81136 18.1295 6.72306 18.0069C6.63476 17.8844 6.57311 17.7448 6.54209 17.597C6.51107 17.4492 6.51137 17.2965 6.54295 17.1488C6.56791 17.0531 6.59712 16.9586 6.63051 16.8656C6.68673 16.6991 6.71375 16.6159 6.7451 16.5413C6.89898 16.1727 7.15194 15.854 7.47594 15.6204C7.79994 15.3869 8.1823 15.2477 8.58061 15.2182C8.6606 15.2128 8.74816 15.2128 8.92328 15.2128H14.7487" stroke="#141C24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.4019 15.2128H11.1147C9.73099 15.2128 9.03916 15.2128 8.49867 14.856C7.95709 14.4993 7.68469 13.8637 7.13987 12.5925L6.95718 12.1666C6.08159 10.1235 5.64487 9.10412 6.12482 8.37446C6.60694 7.64587 7.7182 7.64587 9.93854 7.64587H15.6461C18.1324 7.64587 19.3745 7.64587 19.8436 8.45337C20.3117 9.26087 19.6955 10.3397 18.4621 12.4973L18.1562 13.0346C17.5487 14.0972 17.2449 14.629 16.7412 14.9209C16.2385 15.2128 15.6256 15.2128 14.4019 15.2128Z" stroke="#141C24" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17.4511 22.2391C18.0481 22.2391 18.5321 21.7551 18.5321 21.1581C18.5321 20.5611 18.0481 20.0771 17.4511 20.0771C16.8541 20.0771 16.3701 20.5611 16.3701 21.1581C16.3701 21.7551 16.8541 22.2391 17.4511 22.2391Z" fill="#141C24"/>
            <path d="M7.72259 22.2391C8.3196 22.2391 8.80357 21.7551 8.80357 21.1581C8.80357 20.5611 8.3196 20.0771 7.72259 20.0771C7.12558 20.0771 6.6416 20.5611 6.6416 21.1581C6.6416 21.7551 7.12558 22.2391 7.72259 22.2391Z" fill="#141C24"/>
            </svg>
              Корзина
          </div>
          <div className="link">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4706 20.896C14.4706 20.5233 14.1684 20.221 13.7956 20.221H4.82353C4.54739 20.221 4.32353 19.9972 4.32353 19.721V5.42104C4.32353 5.1449 4.54739 4.92104 4.82353 4.92104H13.7956C14.1684 4.92104 14.4706 4.61884 14.4706 4.24604V4.24604C14.4706 3.87325 14.1684 3.57104 13.7956 3.57104H5C3.89543 3.57104 3 4.46648 3 5.57104V19.571C3 20.6756 3.89543 21.571 5 21.571H13.7956C14.1684 21.571 14.4706 21.2688 14.4706 20.896V20.896ZM12.8947 12.211C12.5468 12.211 12.2647 12.4931 12.2647 12.841V12.841C12.2647 13.189 12.5468 13.471 12.8947 13.471H18.4412L16.2698 15.6858C16.0056 15.9554 16.0056 16.3867 16.2698 16.6562V16.6562C16.5415 16.9334 16.9879 16.9334 17.2596 16.6562L20.3137 13.5411C20.6949 13.1523 20.6949 12.5298 20.3137 12.141L17.2596 9.02585C16.9879 8.74868 16.5415 8.74868 16.2698 9.02585V9.02585C16.0056 9.29535 16.0056 9.72674 16.2698 9.99624L18.4412 12.211H12.8947Z" fill="#141C24"/>
            </svg>
              Выйти
          </div>
          </div>
        </div>
      </div>
    </nav>
    <hr />
    </>
  )
}

export default App
