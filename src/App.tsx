import './App.css'

function App() {

  return (
    <div className="profile">
      <div className="head">
        <div className="banner">
          <img src="https://photo-cms-baophapluat.epicdn.me/w840/Uploaded/2023/nykxxqymrk/2021_11_23/starry-night-1093721-960-720-7985.jpeg" alt="" />
        </div>
        <div className="avatar">
          <img src="./hinh nen.jpg" alt="" />
        </div>
      </div>
      <div className="content">
        <p><strong>Họ tên:</strong> Phạm Công Gia Khánh</p>
        <p><strong>Tuổi:</strong> 23</p>
        <p><strong>Quê quán:</strong> Hải Dương</p>
        <p><strong>Định hướng:</strong> Front-end developer</p>
        <p><strong>Ngôn ngữ đã học:</strong> C, Java, PHP, JavaScript</p>
        <div className="button">
          <button>Folow me !</button>
        </div>
      </div>
    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} classNameName="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} classNameName="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div classNameName="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p classNameName="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
