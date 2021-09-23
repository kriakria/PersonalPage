import styles from '../styles/Logo.module.css';

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <svg width='741' height='88' viewBox='0 0 741 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='337' width='27' height='27' rx='13.5' fill='#F2673D' />
        <path
          d='M164.876 65.224V28.36L159.308 27.72V26.248H178.956V27.72L173.388 28.36V65.864C173.388 72.136 172.022 76.8507 169.292 80.008C166.604 83.208 162.892 84.808 158.156 84.808C154.742 84.808 152.033 84.2533 150.028 83.144C147.98 82.0773 146.956 80.4987 146.956 78.408C146.956 76.36 147.702 74.9093 149.196 74.056C150.006 73.6293 150.838 73.416 151.692 73.416C152.502 73.416 153.334 73.608 154.188 73.992C153.974 75.4427 153.868 76.7653 153.868 77.96C153.868 79.1547 154.23 80.264 154.956 81.288C155.638 82.3547 156.556 82.888 157.708 82.888C158.86 82.888 159.798 82.6747 160.524 82.248C161.292 81.8213 161.91 81.288 162.38 80.648C162.849 80.0507 163.233 79.2187 163.532 78.152C163.873 77.0853 164.129 76.104 164.3 75.208C164.47 74.3547 164.598 73.224 164.684 71.816C164.812 69.6827 164.876 67.4853 164.876 65.224ZM217.093 65.096C214.106 68.168 210.031 69.704 204.869 69.704C199.706 69.704 195.631 68.168 192.645 65.096C189.658 62.024 188.165 58.12 188.165 53.384C188.165 48.648 189.658 44.744 192.645 41.672C195.631 38.6 199.706 37.064 204.869 37.064C210.031 37.064 214.106 38.6 217.093 41.672C220.079 44.744 221.573 48.648 221.573 53.384C221.573 58.12 220.079 62.024 217.093 65.096ZM197.061 53.384C197.061 63.24 199.663 68.168 204.869 68.168C210.074 68.168 212.677 63.24 212.677 53.384C212.677 48.5627 212.101 44.9147 210.949 42.44C209.797 39.9227 207.77 38.664 204.869 38.664C201.967 38.664 199.941 39.9227 198.789 42.44C197.637 44.9147 197.061 48.5627 197.061 53.384ZM244.396 45.32C245.121 43.016 246.444 41.0533 248.364 39.432C250.326 37.8107 252.097 37 253.676 37C255.297 37 256.385 37.4053 256.94 38.216C257.494 38.984 257.772 39.624 257.772 40.136C257.772 41.8853 257.132 43.144 255.852 43.912C254.998 43.2293 253.718 42.888 252.012 42.888C250.348 42.888 248.684 43.4213 247.02 44.488C245.356 45.512 244.524 46.6427 244.524 47.88V67.144L250.284 67.528V69H232.428V67.528L236.652 67.208V39.88L231.468 39.624V38.152L244.524 37.448L244.14 45.32H244.396ZM286.035 37.384C287.955 36.6587 288.915 34.696 288.915 31.496C288.915 30.6427 288.809 29.8533 288.595 29.128C289.321 28.616 290.046 28.36 290.771 28.36C291.497 28.36 292.179 28.488 292.819 28.744C294.355 29.384 295.123 30.472 295.123 32.008C295.123 33.5013 294.462 34.8027 293.139 35.912C291.859 37.0213 290.089 37.7253 287.827 38.024C290.387 38.8773 292.35 40.2213 293.715 42.056C295.081 43.848 295.763 46.088 295.763 48.776C295.763 51.4213 294.441 53.896 291.795 56.2C289.15 58.4613 285.971 59.592 282.259 59.592C278.547 59.592 276.691 60.5947 276.691 62.6C276.691 63.5813 277.374 64.264 278.739 64.648C280.147 64.9893 282.899 65.352 286.995 65.736C291.091 66.0773 294.185 66.8453 296.275 68.04C298.366 69.192 299.411 71.048 299.411 73.608C299.411 76.936 297.769 79.7733 294.483 82.12C291.241 84.4667 286.995 85.64 281.747 85.64C276.542 85.64 272.702 84.8293 270.227 83.208C267.753 81.6293 266.515 79.5173 266.515 76.872C266.515 75.1653 267.134 73.5227 268.371 71.944C269.609 70.3653 271.422 69.256 273.811 68.616C270.825 67.5067 269.331 65.9493 269.331 63.944C269.331 62.536 270.057 61.384 271.507 60.488C272.958 59.592 274.579 59.1227 276.371 59.08C273.513 58.312 271.294 56.9893 269.715 55.112C268.179 53.192 267.411 50.952 267.411 48.392C267.411 45.1067 268.713 42.3973 271.315 40.264C273.918 38.1307 277.417 37.064 281.811 37.064C283.347 37.064 284.755 37.1707 286.035 37.384ZM273.363 76.168C273.363 78.5147 274.067 80.328 275.475 81.608C276.883 82.9307 278.995 83.592 281.811 83.592C284.67 83.592 287.145 82.8453 289.235 81.352C291.369 79.8587 292.435 78.088 292.435 76.04C292.478 73.992 291.902 72.6693 290.707 72.072C289.555 71.4747 287.465 70.984 284.435 70.6L283.667 70.536C280.297 70.1093 277.95 69.7893 276.627 69.576C275.689 70.088 274.899 70.9627 274.259 72.2C273.662 73.4373 273.363 74.76 273.363 76.168ZM281.363 58.312C283.369 58.312 284.862 57.3947 285.843 55.56C286.825 53.7253 287.315 51.336 287.315 48.392C287.315 41.7787 285.481 38.472 281.811 38.472C279.806 38.472 278.313 39.368 277.331 41.16C276.35 42.9093 275.859 45.32 275.859 48.392C275.859 55.0053 277.694 58.312 281.363 58.312ZM328.741 46.664C328.741 41.4587 326.927 38.856 323.301 38.856C319.503 38.856 317.199 42.184 316.389 48.84H328.613C328.698 47.9867 328.741 47.2613 328.741 46.664ZM322.725 69.704C318.159 69.704 314.447 68.2107 311.589 65.224C308.773 62.2373 307.365 58.2907 307.365 53.384C307.365 48.4773 308.837 44.5307 311.781 41.544C314.767 38.5573 318.543 37.064 323.109 37.064C327.674 37.064 331.087 38.0453 333.349 40.008C335.61 41.928 336.741 44.616 336.741 48.072C336.741 49.0533 336.655 50.0773 336.485 51.144H316.197V53.384C316.197 58.1627 316.794 61.7893 317.989 64.264C319.183 66.696 320.975 67.912 323.365 67.912C325.797 67.912 327.994 67.4213 329.957 66.44C331.962 65.416 333.519 63.9867 334.629 62.152C335.567 62.4507 336.037 62.8987 336.037 63.496C336.037 64.5627 335.034 65.8 333.029 67.208C332.047 67.8907 330.639 68.488 328.805 69C327.013 69.4693 324.986 69.704 322.725 69.704ZM406.434 37.768H417.186V39.432L413.282 40.648L402.402 69H399.842L392.034 50.504L384.738 69H380.578L368.226 39.752L365.538 39.432V37.768H380.13V39.432L375.906 39.944L384.994 62.152L390.626 47.24L387.49 39.752L384.866 39.432V37.768H399.33V39.432L395.106 39.944L403.362 60.296L410.594 40.648L406.434 39.432V37.768ZM437.271 45.32C437.996 43.016 439.319 41.0533 441.239 39.432C443.201 37.8107 444.972 37 446.551 37C448.172 37 449.26 37.4053 449.815 38.216C450.369 38.984 450.647 39.624 450.647 40.136C450.647 41.8853 450.007 43.144 448.727 43.912C447.873 43.2293 446.593 42.888 444.887 42.888C443.223 42.888 441.559 43.4213 439.895 44.488C438.231 45.512 437.399 46.6427 437.399 47.88V67.144L443.159 67.528V69H425.303V67.528L429.527 67.208V39.88L424.343 39.624V38.152L437.399 37.448L437.015 45.32H437.271ZM476.03 69H459.518V67.528L463.678 67.144V39.88L458.174 39.56V38.216L471.87 37.384V67.144L476.03 67.528V69ZM472.318 26.632C472.318 27.912 471.849 29.0213 470.91 29.96C470.014 30.8987 468.884 31.368 467.518 31.368C466.153 31.368 465.001 30.92 464.062 30.024C463.166 29.0853 462.718 27.9547 462.718 26.632C462.718 25.2667 463.188 24.1147 464.126 23.176C465.065 22.1947 466.196 21.704 467.518 21.704C468.841 21.704 469.972 22.1947 470.91 23.176C471.849 24.1573 472.318 25.3093 472.318 26.632ZM497.252 69.704C493.156 69.704 490.554 68.2747 489.444 65.416C488.975 64.1787 488.74 62.6213 488.74 60.744C488.74 53.6613 488.847 46.5573 489.06 39.432H484.708V37.768H489.124L489.188 28.36H497.38L497.188 37.768H506.148V39.432H497.188L497.06 44.616C496.932 51.528 496.868 57.864 496.868 63.624C496.868 65.288 497.039 66.4187 497.38 67.016C497.764 67.6133 498.426 67.912 499.364 67.912C500.346 67.912 501.412 67.2507 502.564 65.928C503.759 64.5627 504.612 62.9413 505.124 61.064C505.978 61.064 506.404 61.3627 506.404 61.96C506.404 62.088 506.383 62.2373 506.34 62.408C505.658 64.6267 504.484 66.3973 502.82 67.72C501.199 69.0427 499.343 69.704 497.252 69.704ZM537.578 46.664C537.578 41.4587 535.765 38.856 532.138 38.856C528.341 38.856 526.037 42.184 525.226 48.84H537.45C537.536 47.9867 537.578 47.2613 537.578 46.664ZM531.562 69.704C526.997 69.704 523.285 68.2107 520.426 65.224C517.61 62.2373 516.202 58.2907 516.202 53.384C516.202 48.4773 517.674 44.5307 520.618 41.544C523.605 38.5573 527.381 37.064 531.946 37.064C536.512 37.064 539.925 38.0453 542.186 40.008C544.448 41.928 545.578 44.616 545.578 48.072C545.578 49.0533 545.493 50.0773 545.322 51.144H525.034V53.384C525.034 58.1627 525.632 61.7893 526.826 64.264C528.021 66.696 529.813 67.912 532.202 67.912C534.634 67.912 536.832 67.4213 538.794 66.44C540.8 65.416 542.357 63.9867 543.466 62.152C544.405 62.4507 544.874 62.8987 544.874 63.496C544.874 64.5627 543.872 65.8 541.866 67.208C540.885 67.8907 539.477 68.488 537.642 69C535.85 69.4693 533.824 69.704 531.562 69.704ZM568.819 68.104C570.312 68.104 571.549 67.6347 572.531 66.696C573.512 65.7147 574.003 64.136 574.003 61.96C574.003 60.2107 573.277 58.888 571.827 57.992C570.717 57.3093 569.288 56.648 567.539 56.008C565.832 55.3253 564.509 54.7493 563.571 54.28C562.675 53.8107 561.672 53.192 560.563 52.424C558.387 50.888 557.299 48.7973 557.299 46.152C557.299 43.5067 558.387 41.3307 560.563 39.624C562.781 37.9173 566.003 37.064 570.227 37.064C572.872 37.064 575.112 37.64 576.947 38.792C578.781 39.9013 579.699 41.3093 579.699 43.016C579.699 44.7227 578.973 45.96 577.523 46.728C576.84 47.0693 576.157 47.24 575.475 47.24L573.171 46.536C573.427 45.2133 573.555 44.0187 573.555 42.952C573.555 41.8427 573.213 40.8613 572.531 40.008C571.848 39.112 570.824 38.664 569.459 38.664C566.131 38.664 564.467 40.6693 564.467 44.68C564.467 46.5147 565.171 47.88 566.579 48.776C567.645 49.5013 569.011 50.1627 570.675 50.76C572.339 51.3147 573.64 51.8053 574.579 52.232C575.56 52.6587 576.605 53.256 577.715 54.024C579.933 55.4747 581.043 57.6293 581.043 60.488C581.043 63.304 579.869 65.544 577.523 67.208C575.176 68.872 572.083 69.704 568.243 69.704C563.976 69.704 560.819 69 558.771 67.592C557.576 66.7387 556.979 65.6933 556.979 64.456C556.979 63.2187 557.384 62.216 558.195 61.448C559.048 60.68 560.221 60.2747 561.715 60.232C562.013 65.48 564.381 68.104 568.819 68.104Z'
          fill='#F9F9E5'
        />
      </svg>
    </div>
  );
};
