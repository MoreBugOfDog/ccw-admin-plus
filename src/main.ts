const timeout = 850;
import "./style.css";

(() => {
  const app = document.createElement("div");
  app.className = "fixed-button-container";
  document.body.append(app);
  return app;
})().innerHTML = `
  <div>
    <button class="fixed-button">一键通过全组（shift暂停）</button>
    <button class="pause-button">暂停</button>
  </div>
`;
// 等待页面加载完成

const buttons = document.querySelector<HTMLButtonElement>(".fixed-button")!;
let isPaused = false; // 新增变量来跟踪暂停状态

buttons.addEventListener("click", () => {
  isPaused = false;
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      if (!isPaused) {
        // 检查是否暂停
        const button =
          document.querySelector<HTMLButtonElement>(".checkBtn-1WW6n")!;
        button.click();
      }
    }, timeout * i);
  }
});

// 移除暂停按钮的事件监听器
// pauseButton.addEventListener("click", () => {
//   isPaused = !isPaused; // 切换暂停状态
//   pauseButton.textContent = isPaused ? "继续" : "暂停"; // 更新按钮文本
// });

// 添加对 Shift 键的事件监听器
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const button =
      document.querySelector<HTMLButtonElement>(".checkBtn-1WW6n")!;
    button.click();
  }
  if (event.key === "Shift") {
    // 检测 Shift 键
    isPaused = !isPaused; // 切换暂停状态
    console.log(isPaused ? "已暂停" : "已继续"); // 控制台输出状态
  }
});
