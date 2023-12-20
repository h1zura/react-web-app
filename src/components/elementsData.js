const elementsData = {
    element1: {
      html: '<button class="elem-185827"><span class="boxelem-185827">Hover!</span></button>',
      css: `
      .boxelem-185827 {
        width: 140px;
        height: auto;
        float: left;
        transition: .5s linear;
        position: relative;
        display: block;
        overflow: hidden;
        padding: 15px;
        text-align: center;
        margin: 0 5px;
        background: transparent;
        text-transform: uppercase;
        font-weight: 900;
        background: lightblue;
      }
      
      .boxelem-185827:before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        border-bottom: 4px solid transparent;
        border-left: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(100%);
      }
      
      .boxelem-185827:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-top: 4px solid transparent;
        border-right: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(-100%);
      }
      
      .boxelem-185827:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      }
      
      .boxelem-185827:hover:before {
        border-color: #262626;
        height: 100%;
        transform: translateX(0);
        transition: .3s transform linear, .3s height linear .3s;
      }
      
      .boxelem-185827:hover:after {
        border-color: #262626;
        height: 100%;
        transform: translateX(0);
        transition: .3s transform linear, .3s height linear .5s;
      }
      
      .elem-185827 {
        color: black;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
      }
      `,
      metadata: {
        id: '1',
        name: 'hover--button',
        type: 'button',
        creator: 'aya@mail.ru',
        views: '12000',
      },
    },
    element2: {
        html: '<button class="vlgfjdfsse">Get in touch</button>',
        css: `
        .vlgfjdfsse {
          display: inline-block;
          padding: 12px 24px;
          border: 1px solid #4f4f4f;
          border-radius: 4px;
          transition: all 0.2s ease-in;
          position: relative;
          overflow: hidden;
          font-size: 19px;
          color: black;
          z-index: 1;
        }
        
        .vlgfjdfsse:before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scaleY(1) scaleX(1.25);
          top: 100%;
          width: 140%;
          height: 180%;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }
        
        .vlgfjdfsse:after {
          content: "";
          position: absolute;
          left: 55%;
          transform: translateX(-50%) scaleY(1) scaleX(1.45);
          top: 180%;
          width: 160%;
          height: 190%;
          background-color: #39bda7;
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }
        
        .vlgfjdfsse:hover {
          color: #ffffff;
          border: 1px solid #39bda7;
        }
        
        .vlgfjdfsse:hover:before {
          top: -35%;
          background-color: #39bda7;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
        
        .vlgfjdfsse:hover:after {
          top: -45%;
          background-color: #39bda7;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
        `,
        metadata: {
          id: '2',
          name: 'hover--button',
          type: 'button',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
      },
      element3: {
        html: '<div class="dfsewqdfsa"><div class="vcdslespxl"></div></div>',
        css: `
        .dfsewqdfsa {
          background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
          width: 100px;
          height: 100px;
          animation: spinning82341 1.7s linear infinite;
          text-align: center;
          border-radius: 50px;
          filter: blur(1px);
          box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
        }
        
        .vcdslespxl {
          background-color: rgb(36, 36, 36);
          width: 100px;
          height: 100px;
          border-radius: 50px;
          filter: blur(10px);
        }
        
        @keyframes spinning82341 {
          to {
            transform: rotate(360deg);
          }
        }
        `,
        metadata: {
          id: '3',
          name: '',
          type: 'loader',
          creator: 'aya@mail.ru',
          views: '12000',
        },
      },
      element4: {
        html: '<div class="rating"><form class="rating-form"><label for="super-happy" class="lb"><input type="radio" name="rating" class="super-happy" id="super-happy" value="super-happy"><svg class="svg" viewBox="0 0 24 24"><path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg></label><label for="neutral" class="lb"><input type="radio" name="rating" class="neutral" id="neutral" value="neutral"><svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24"><path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z"></path></svg></label><label for="super-sad" class="lb"><input type="radio" name="rating" class="super-sad" id="super-sad" value="super-sad"><svg class="svg" viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z"></path></svg></label></form></div>',
        css: `
        .rating {
            cursor: pointer;
          }
          
          .card {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin: auto;
            -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
            background-color: rgb(255, 255, 255);
            padding: 0.8rem;
            width: 33rem;
          }
          
          .rating-container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 0.4rem 0.8rem;
            width: 100%;
          }
          
          .rating {
            background-color: rgba(0, 0, 16, 0.8);
            padding: 0.4rem 0.4rem 0.1rem 0.4rem;
            border-radius: 2.2rem;
          }
          
          .rating-form {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .svg {
            fill: rgb(242, 242, 242);
            height: 3.6rem;
            width: 3.6rem;
            margin: 0.2rem;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          
          .rating-form-2 svg {
            height: 3rem;
            width: 3rem;
            margin: 0.5rem;
          }
          
          #radios label {
            position: relative;
          }
          
          .super-happy, [type="radio"] {
            position: absolute;
            opacity: 0;
          }
          
          .input ,[type="radio"] + svg {
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
          }
          
          .super-happy[class="super-happy"]:hover + svg,
          .super-happy[class="super-happy"]:checked + svg,
          .super-happy[class="super-happy"]:focus + svg {
            fill: rgb(0, 204, 79);
            transition: 1.5s;
          }
          
          .neutral[class="neutral"]:hover + svg,
          .neutral[class="neutral"]:checked + svg,
          .neutral[class="neutral"]:focus + svg {
            fill: rgb(232, 214, 0);
            transition: 1.5s;
          }
          
          .super-sad[class="super-sad"]:hover + svg,
          .super-sad[class="super-sad"]:checked + svg,
          .super-sad[class="super-sad"]:focus + svg {
            fill: rgb(239, 42, 16);
            transition: 1.5s;
          }
        `,
        metadata: {
          id: '4',
          name: '',
          type: 'radio',
          creator: 'aya@mail.ru',
          views: '12000',
        },
    },
    element5: {
        html: '<section class="loader"> <div class="slider" style="--i:0"> </div> <div class="slider" style="--i:1"> </div> <div class="slider" style="--i:2"> </div> <div class="slider" style="--i:3"> </div> <div class="slider" style="--i:4"> </div> </section>',
        css: `
        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
          }
          
          .slider {
            overflow: hidden;
            background-color: white;
            margin: 0 15px;
            height: 80px;
            width: 20px;
            border-radius: 30px;
            box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 30px #fff,
              inset -5px -5px 10px rgba(0, 0, 255, 0.1),
              inset 5px 5px 10px rgba(0, 0, 0, 0.1);
            position: relative;
          }
          
          .slider::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            border-radius: 100%;
            box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 420px 0 400px #2697f3,
              inset 0px 0px 0px rgba(0, 0, 0, 0.1);
            animation: animate_2 2.5s ease-in-out infinite;
            animation-delay: calc(-0.5s * var(--i));
          }
          
          @keyframes animate_2 {
            0% {
              transform: translateY(250px);
              filter: hue-rotate(0deg);
            }
          
            50% {
              transform: translateY(0);
            }
          
            100% {
              transform: translateY(250px);
              filter: hue-rotate(180deg);
            }
          }
          
        `,
        metadata: {
          id: '5',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element6: {
        html: '<div class="custom-loader"></div>',
        css: `
        .custom-loader {
            width: 70px;
            height: 70px;
            background: #ffa600;
            border-radius: 50px;
            -webkit-mask: radial-gradient(circle 31px at 50% calc(100% + 13px),#000 95%,#0000) top 4px left 50%,
              radial-gradient(circle 31px,#000 95%,#0000) center,
              radial-gradient(circle 31px at 50% -13px,#000 95%,#0000) bottom 4px left 50%,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            -webkit-mask-repeat: no-repeat;
            animation: cu10 1.5s infinite;
          }
          
          @keyframes cu10 {
            0% {
              -webkit-mask-size: 0    18px,0    18px,0    18px,auto
            }
          
            16.67% {
              -webkit-mask-size: 100% 18px,0    18px,0    18px,auto
            }
          
            33.33% {
              -webkit-mask-size: 100% 18px,100% 18px,0    18px,auto
            }
          
            50% {
              -webkit-mask-size: 100% 18px,100% 18px,100% 18px,auto
            }
          
            66.67% {
              -webkit-mask-size: 0    18px,100% 18px,100% 18px,auto
            }
          
            83.33% {
              -webkit-mask-size: 0    18px,0    18px,100% 18px,auto
            }
          
            100% {
              -webkit-mask-size: 0    18px,0    18px,0    18px,auto
            }
          }
        `,
        metadata: {
          id: '6',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element7: {
        html: '<div class="InputContainer"> <input placeholder="0000 0000 0000 0000" id="input" class="input" name="text" type="text"> <div class="visaCard"> <svg viewBox="0 0 48 48" height="23" width="23" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" class="logo"> <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path><path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path><path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path> </svg> </div> </div>',
        css: `
        .InputContainer {
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(8, 8, 8);
            overflow: hidden;
            padding: 0px 5px 0px 15px;
            border: 1px solid rgba(255, 255, 255, 0.322);
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
          }
          
          .input {
            width: 170px;
            height: 100%;
            border: none;
            outline: none;
            font-size: 0.9em;
            caret-color: rgb(255, 81, 0);
            background-color: rgb(8, 8, 8);
            font-weight: 600;
            color: white;
          }
          
          .visaCard {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 40px;
            height: 25px;
            background-color: rgb(8, 8, 8);
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.068);
            border-radius: 7px;
          }
        `,
        metadata: {
          id: '7',
          name: '',
          type: 'input',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element8: {
        html: '<div class="loader8"> <svg viewBox="0 0 80 80"> <circle id="test" cx="40" cy="40" r="32"></circle> </svg> </div> <div class="loader8 triangle"> <svg viewBox="0 0 86 80"> <polygon points="43 8 79 72 7 72"></polygon> </svg> </div> <div class="loader8"> <svg viewBox="0 0 80 80"> <rect x="8" y="8" width="64" height="64"></rect> </svg></div>',
        css: `
        .loader8 {
            --path: #2f3545;
            --dot: #5628ee;
            --duration: 3s;
            width: 44px;
            height: 44px;
            position: relative;
          }
          
          .loader8:before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            position: absolute;
            display: block;
            background: var(--dot);
            top: 37px;
            left: 19px;
            transform: translate(-18px, -18px);
            animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }
          
          .loader8 svg {
            display: block;
            width: 100%;
            height: 100%;
          }
          
          .loader8 svg rect, .loader8 svg polygon, .loader8 svg circle {
            fill: none;
            stroke: var(--path);
            stroke-width: 10px;
            stroke-linejoin: round;
            stroke-linecap: round;
          }
          
          .loader8 svg polygon {
            stroke-dasharray: 145 76 145 76;
            stroke-dashoffset: 0;
            animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }
          
          .loader8 svg rect {
            stroke-dasharray: 192 64 192 64;
            stroke-dashoffset: 0;
            animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }
          
          .loader8 svg circle {
            stroke-dasharray: 150 50 150 50;
            stroke-dashoffset: 75;
            animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }
          
          .loader8 .triangle {
            width: 48px;
          }
          
          .loader8 .triangle:before {
            left: 21px;
            transform: translate(-10px, -18px);
            animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
          }
          
          @keyframes pathTriangle {
            33% {
              stroke-dashoffset: 74;
            }
          
            66% {
              stroke-dashoffset: 147;
            }
          
            100% {
              stroke-dashoffset: 221;
            }
          }
          
          @keyframes dotTriangle {
            33% {
              transform: translate(0, 0);
            }
          
            66% {
              transform: translate(10px, -18px);
            }
          
            100% {
              transform: translate(-10px, -18px);
            }
          }
          
          @keyframes pathRect {
            25% {
              stroke-dashoffset: 64;
            }
          
            50% {
              stroke-dashoffset: 128;
            }
          
            75% {
              stroke-dashoffset: 192;
            }
          
            100% {
              stroke-dashoffset: 256;
            }
          }
          
          @keyframes dotRect {
            25% {
              transform: translate(0, 0);
            }
          
            50% {
              transform: translate(18px, -18px);
            }
          
            75% {
              transform: translate(0, -36px);
            }
          
            100% {
              transform: translate(-18px, -18px);
            }
          }
          
          @keyframes pathCircle {
            25% {
              stroke-dashoffset: 125;
            }
          
            50% {
              stroke-dashoffset: 175;
            }
          
            75% {
              stroke-dashoffset: 225;
            }
          
            100% {
              stroke-dashoffset: 275;
            }
          }
          
          .loader8 {
            display: inline-block;
            margin: 0 16px;
          }
           
        `,
        metadata: {
          id: '8',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
        },
    },
    element9: {
        html: '<button class="bookmarkBtn"> <span class="IconContainer"> <svg viewBox="0 0 384 512" height="0.9em" class="icon"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg> </span> <p class="text">Save</p> </button>',
        css: `
        .bookmarkBtn {
            width: 100px;
            height: 40px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.349);
            background-color: rgb(12, 12, 12);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: .3s;
            overflow: hidden;
          }
          
          .IconContainer {
            width: 30px;
            height: 30px;
            background: linear-gradient(to bottom, rgb(255, 136, 255),rgb(172, 70, 255));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 2;
            transition-duration: .3s;
          }
          
          .icon {
            border-radius: 1px;
          }
          
          .text {
            height: 100%;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            z-index: 1;
            transition-duration: .3s;
            font-size: 1.04em;
          }
          
          .bookmarkBtn:hover .IconContainer {
            width: 90px;
            border-radius: 40px;
            transition-duration: .3s;
          }
          
          .bookmarkBtn:hover .text {
            transform: translate(10px);
            width: 0;
            font-size: 0;
            transition-duration: .3s;
          }
          
          .bookmarkBtn:active {
            transform: scale(0.95);
            transition-duration: .3s;
          }
        `,
        metadata: {
          id: '9',
          name: '',
          type: 'button',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element10: {
        html: '<div class="loader10"> <div class="wrapper"> <div class="circle10"></div> <div class="line-1"></div> <div class="line-2"></div> <div class="line-3"></div> <div class="line-4"></div> </div> </div>',
        css: `
        .loader10 {
            position: relative;
            width: 240px;
            height: 130px;
            margin-bottom: 10px;
            border: 1px solid #d3d3d3;
            padding: 15px;
            background-color: #e3e3e3;
            overflow: hidden;
          }
          
          .loader10:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(110deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
            animation: gradient-animation_2 1.2s linear infinite;
          }
          
          .loader10 .wrapper {
            width: 100%;
            height: 100%;
            position: relative;
          }
          
          .loader10 .wrapper > div {
            background-color: #cacaca;
          }
          
          .loader10 .circle10 {
            position: absolute;
            top: 1px;
            left: 1px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          
          .loader10 .button {
            display: inline-block;
            height: 32px;
            width: 75px;
          }
          
          .loader10 .line-1 {
            position: absolute;
            top: 11px;
            left: 58px;
            height: 10px;
            width: 100px;
          }
          
          .loader10 .line-2 {
            position: absolute;
            top: 34px;
            left: 58px;
            height: 10px;
            width: 150px;
          }
          
          .loader10 .line-3 {
            position: absolute;
            top: 57px;
            left: 0px;
            height: 10px;
            width: 100%;
          }
          
          .loader10 .line-4 {
            position: absolute;
            top: 80px;
            left: 0px;
            height: 10px;
            width: 92%;
          }
          
          @keyframes gradient-animation_2 {
            0% {
              transform: translateX(-100%);
            }
          
            100% {
              transform: translateX(100%);
            }
          }
        `,
        metadata: {
          id: '10',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element11: {
        html: '<button class="comic-button">Click me!</button>',
        css: `
        .comic-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            color: #fff;
            background-color: #ff5252;
            border: 2px solid #000;
            border-radius: 10px;
            box-shadow: 5px 5px 0px #000;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .comic-button:hover {
            background-color: #fff;
            color: #ff5252;
            border: 2px solid #ff5252;
            box-shadow: 5px 5px 0px #ff5252;
          }
          
          .comic-button:active {
            background-color: #fcf414;
            box-shadow: none;
            transform: translateY(4px);
          }
          
        `,
        metadata: {
          id: '11',
          name: '',
          type: 'button',
          creator: 'aya@mail.ru',
          views: '12000',
        },
    },
    element12: {
        html: '<button class="button12"> HOVER ME</button>',
        css: `
        .button12 {
            text-decoration: none;
            position: relative;
            border: none;
            font-size: 14px;
            font-family: inherit;
            color: #fff;
            width: 9em;
            height: 3em;
            line-height: 2em;
            text-align: center;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 300%;
            border-radius: 30px;
            z-index: 1;
          }
          
          .button12:hover {
            animation: ani 8s linear infinite;
            border: none;
          }
          
          @keyframes ani {
            0% {
              background-position: 0%;
            }
          
            100% {
              background-position: 400%;
            }
          }
          
          .button12:before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            z-index: -1;
            background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
            background-size: 400%;
            border-radius: 35px;
            transition: 1s;
          }
          
          .button12:hover::before {
            filter: blur(20px);
          }
          
          .button12:active {
            background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
          }
        `,
        metadata: {
          id: '12',
          name: '',
          type: 'button',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element13: {
        html: '<button class="button13"></button>',
        css: `
        .button13 {
            position: relative;
            background-color: transparent;
            color: #e8e8e8;
            font-size: 17px;
            font-weight: 600;
            border-radius: 10px;
            width: 150px;
            height: 60px;
            border: none;
            text-transform: uppercase;
            cursor: pointer;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
            transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .button13::before {
            content: "Hello!";
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: linear-gradient(135deg,#7b4397,#dc2430 );
            transform: translate(0%,90%);
            z-index: 99;
            position: relative;
            transform-origin: bottom;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .button13::after {
            content: "Hover me";
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #333;
            width: 100%;
            height: 100%;
            pointer-events: none;
            transform-origin: top;
            transform: translate(0%,-100%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .button13:hover::before {
            transform: translate(0%,0%);
          }
          
          .button13:hover::after {
            transform: translate(0%,-200%);
          }
          
          .button13:focus {
            outline: none;
          }
          
          .button13:active {
            scale: 0.95;
          }
        `,
        metadata: {
          id: '13',
          name: '',
          type: 'button',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element14: {
        html: `
        <div class="checkbox-wrapper-5f7a6e1d">
        <input id="_checkbox-26" type="checkbox">
        <label for="_checkbox-26" class="label-5f7a6e1d">
          <div class="tick_mark-5f7a6e1d"></div>
        </label>
       </div>
        `,
        css: `
        .checkbox-wrapper-5f7a6e1d * {
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        
        .checkbox-wrapper-5f7a6e1d input[type="checkbox"] {
          display: none;
        }
        
        .checkbox-wrapper-5f7a6e1d .label-5f7a6e1d {
          --size: 50px;
          --shadow: calc(var(--size) * .07) calc(var(--size) * .1);
          position: relative;
          display: block;
          width: var(--size);
          height: var(--size);
          margin: 0 auto;
          background-color: #4158D0;
          background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
          border-radius: 50%;
          box-shadow: 0 var(--shadow) #ffbeb8;
          cursor: pointer;
          transition: 0.2s ease transform, 0.2s ease background-color,
              0.2s ease box-shadow;
          overflow: hidden;
          z-index: 1;
        }
        
        .checkbox-wrapper-5f7a6e1d .label-5f7a6e1d:before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          width: calc(var(--size) * .7);
          height: calc(var(--size) * .7);
          margin: 0 auto;
          background-color: #fff;
          transform: translateY(-50%);
          border-radius: 50%;
          box-shadow: inset 0 var(--shadow) #ffbeb8;
          transition: 0.2s ease width, 0.2s ease height;
        }
        
        .checkbox-wrapper-5f7a6e1d .label-5f7a6e1d:hover:before {
          width: calc(var(--size) * .55);
          height: calc(var(--size) * .55);
          box-shadow: inset 0 var(--shadow) #ff9d96;
        }
        
        .checkbox-wrapper-5f7a6e1d .label-5f7a6e1d:active {
          transform: scale(0.9);
        }
        
        .checkbox-wrapper-5f7a6e1d .tick_mark-5f7a6e1d {
          position: absolute;
          top: -1px;
          right: 0;
          left: calc(var(--size) * -.05);
          width: calc(var(--size) * .6);
          height: calc(var(--size) * .6);
          margin: 0 auto;
          margin-left: calc(var(--size) * .14);
          transform: rotateZ(-40deg);
        }
        
        .checkbox-wrapper-5f7a6e1d .tick_mark-5f7a6e1d:before,
          .checkbox-wrapper-5f7a6e1d .tick_mark-5f7a6e1d:after {
          content: "";
          position: absolute;
          background-color: #fff;
          border-radius: 2px;
          opacity: 0;
          transition: 0.2s ease transform, 0.2s ease opacity;
        }
        
        .checkbox-wrapper-5f7a6e1d .tick_mark-5f7a6e1d:before {
          left: 0;
          bottom: 0;
          width: calc(var(--size) * .1);
          height: calc(var(--size) * .3);
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
          transform: translateY(calc(var(--size) * -.68));
        }
        
        .checkbox-wrapper-5f7a6e1d .tick_mark-5f7a6e1d:after {
          left: 0;
          bottom: 0;
          width: 100%;
          height: calc(var(--size) * .1);
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
          transform: translateX(calc(var(--size) * .78));
        }
        
        .checkbox-wrapper-5f7a6e1d input[type="checkbox"]:checked + .label-5f7a6e1d {
          background-color: #4158D0;
          background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
          box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }
        
        .checkbox-wrapper-5f7a6e1d input[type="checkbox"]:checked + .label-5f7a6e1d:before {
          width: 0;
          height: 0;
        }
        
        .checkbox-wrapper-5f7a6e1d input[type="checkbox"]:checked + .label-5f7a6e1d .tick_mark-5f7a6e1d:before,
          .checkbox-wrapper-5f7a6e1d input[type="checkbox"]:checked + .label-5f7a6e1d .tick_mark-5f7a6e1d:after {
          transform: translate(0);
          opacity: 1;
        }
        
        `,
        metadata: {
          id: '14',
          name: '',
          type: 'checkbox',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element15: {
        html: '<div class="form-control"> <input required="" type="value"> <label> <span style="transition-delay:350ms">U</span> <span style="transition-delay:300ms">s</span> <span style="transition-delay:250ms">e</span> <span style="transition-delay:200ms">r</span> <span style="transition-delay:150ms">n</span> <span style="transition-delay:100ms">a</span> <span style="transition-delay:50ms">m</span> <span style="transition-delay:0ms">e</span> </label> </div>',
        css: `
        .form-control {
            position: relative;
            margin: 20px 0 40px;
            width: 190px;
          }
          
          .form-control input {
            background-color: transparent;
            border: 0;
            border-bottom: 2px #000 solid;
            display: block;
            width: 100%;
            padding: 15px 0;
            font-size: 18px;
            color: #000;
          }
          
          .form-control input:focus,
          .form-control input:valid {
            outline: 0;
            border-bottom-color: darkgrey;
          }
          
          .form-control label {
            position: absolute;
            top: 15px;
            left: 0;
            pointer-events: none;
          }
          
          .form-control label span {
            display: inline-block;
            font-size: 18px;
            min-width: 5px;
            color: #000;
            transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .form-control input:focus+label span,
          .form-control input:valid+label span {
            color: darkgrey;
            transform: translateY(-30px);
          }
        `,
        metadata: {
          id: '15',
          name: '',
          type: 'input',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element16: {
        html: '<div class="wrapper16"> <div class="circle"></div> <div class="circle"></div> <div class="circle"></div> <div class="shadow16"></div> <div class="shadow16"></div> <div class="shadow16"></div> </div>',
        css: `
        .wrapper16 {
            width: 200px;
            height: 60px;
            position: relative;
            z-index: 1;
          }
          
          .circle {
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 50%;
            background-color: #000;
            left: 15%;
            transform-origin: 50%;
            animation: circle7124 .5s alternate infinite ease;
          }
          
          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }
          
            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }
          
            100% {
              top: 0%;
            }
          }
          
          .circle:nth-child(2) {
            left: 45%;
            animation-delay: .2s;
          }
          
          .circle:nth-child(3) {
            left: auto;
            right: 15%;
            animation-delay: .3s;
          }
          
          .shadow16 {
            width: 20px;
            height: 4px;
            border-radius: 50%;
            background-color: rgba(0,0,0,0.9);
            position: absolute;
            top: 62px;
            transform-origin: 50%;
            z-index: -1;
            left: 15%;
            filter: blur(1px);
            animation: shadow046 .5s alternate infinite ease;
          }
          
          @keyframes shadow046 {
            0% {
              transform: scaleX(1.5);
            }
          
            40% {
              transform: scaleX(1);
              opacity: .7;
            }
          
            100% {
              transform: scaleX(.2);
              opacity: .4;
            }
          }
          
          .shadow16:nth-child(4) {
            left: 45%;
            animation-delay: .2s
          }
          
          .shadow16:nth-child(5) {
            left: auto;
            right: 15%;
            animation-delay: .3s;
          }
        `,
        metadata: {
          id: '16',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element17: {
        html: '<div class="container"> <div class="tree"> <div class="branch" style="--x:0"> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div> <div class="branch" style="--x:1"> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div> <div class="branch" style="--x:2"> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div> <div class="branch" style="--x:3"> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div> <div class="stem"> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div> <span class="shadow"></span> </div> </div>',
        css: `
        .container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .tree {
            position: relative;
            width: 50px;
            height: 50px;
            transform-style: preserve-3d;
            transform: rotateX(-20deg) rotateY(30deg);
            animation: treeAnimate 5s linear infinite;
          }
          
          @keyframes treeAnimate {
            0% {
              transform: rotateX(-20deg) rotateY(360deg);
            }
          
            100% {
              transform: rotateX(-20deg) rotateY(0deg);
            }
          }
          
          .tree div {
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transform: translateY(calc(25px * var(--x))) translateZ(0px);
          }
          
          .tree div.branch span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #69c069, #77dd77);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            border-bottom: 5px solid #00000019;
            transform-origin: bottom;
            transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(28.5px);
          }
          
          .tree div.stem span {
            position: absolute;
            top: 110px;
           /* updated top value */
            left: calc(50% - 7.5px);
            width: 15px;
            height: 50%;
            background: linear-gradient(90deg, #bb4622, #df7214);
            border-bottom: 5px solid #00000019;
            transform-origin: bottom;
            transform: rotateY(calc(90deg * var(--i))) translateZ(7.5px);
          }
          
          .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            filter: blur(20px);
            transform-style: preserve-3d;
            transform: rotateX(90deg) translateZ(-65px);
          }
        `,
        metadata: {
          id: '17',
          name: '',
          type: 'loader',
          creator: 'aya@mail.ru',
          views: '5934',
        },
    },
    element18: {
        html: '<div class="container noselect"> <div class="canvas"> <div class="tracker tr-1"></div> <div class="tracker tr-2"></div> <div class="tracker tr-3"></div> <div class="tracker tr-4"></div> <div class="tracker tr-5"></div> <div class="tracker tr-6"></div> <div class="tracker tr-7"></div> <div class="tracker tr-8"></div> <div class="tracker tr-9"></div> <div class="tracker tr-10"></div> <div class="tracker tr-11"></div> <div class="tracker tr-12"></div> <div class="tracker tr-13"></div> <div class="tracker tr-14"></div> <div class="tracker tr-15"></div> <div class="tracker tr-16"></div> <div class="tracker tr-17"></div> <div class="tracker tr-18"></div> <div class="tracker tr-19"></div> <div class="tracker tr-20"></div> <div class="tracker tr-21"></div> <div class="tracker tr-22"></div> <div class="tracker tr-23"></div> <div class="tracker tr-24"></div> <div class="tracker tr-25"></div> <div id="card"> <p id="prompt">HOVER OVER :D</p> <div class="title">look mom,<br>no JS</div> </div> </div> </div>',
        css: `
        /*works janky on mobile :<*/
        .container {
          position: relative;
          width: 190px;
          height: 254px;
          transition: 200ms;
        }
        
        .container:active {
          width: 180px;
          height: 245px;
        }
        
        #card {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          transition: 700ms;
          background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
        }
        
        .subtitle {
          transform: translateY(160px);
          color: rgb(134, 110, 221);
          text-align: center;
          width: 100%;
        }
        
        .title {
          opacity: 0;
          transition-duration: 300ms;
          transition-timing-function: ease-in-out-out;
          transition-delay: 100ms;
          position: absolute;
          font-size: x-large;
          font-weight: bold;
          color: white;
        }
        
        .tracker:hover ~ #card .title {
          opacity: 1;
        }
        
        #prompt {
          bottom: 8px;
          left: 12px;
          z-index: 20;
          font-size: 20px;
          font-weight: bold;
          transition: 300ms ease-in-out-out;
          position: absolute;
          max-width: 110px;
          color: rgb(255, 255, 255);
        }
        
        .tracker {
          position: absolute;
          z-index: 200;
          width: 100%;
          height: 100%;
        }
        
        .tracker:hover {
          cursor: pointer;
        }
        
        .tracker:hover ~ #card #prompt {
          opacity: 0;
        }
        
        .tracker:hover ~ #card {
          transition: 300ms;
          filter: brightness(1.1);
        }
        
        .container:hover #card::before {
          transition: 200ms;
          content: '';
          opacity: 80%;
        }
        
        .canvas {
          perspective: 800px;
          inset: 0;
          z-index: 200;
          position: absolute;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          gap: 0px 0px;
          grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5"
            "tr-6 tr-7 tr-8 tr-9 tr-10"
            "tr-11 tr-12 tr-13 tr-14 tr-15"
            "tr-16 tr-17 tr-18 tr-19 tr-20"
            "tr-21 tr-22 tr-23 tr-24 tr-25";
        }
        
        #card::before {
          content: '';
          background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
          filter: blur(2rem);
          opacity: 30%;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          transition: 200ms;
        }
        
        .tr-1 {
          grid-area: tr-1;
        }
        
        .tr-2 {
          grid-area: tr-2;
        }
        
        .tr-3 {
          grid-area: tr-3;
        }
        
        .tr-4 {
          grid-area: tr-4;
        }
        
        .tr-5 {
          grid-area: tr-5;
        }
        
        .tr-6 {
          grid-area: tr-6;
        }
        
        .tr-7 {
          grid-area: tr-7;
        }
        
        .tr-8 {
          grid-area: tr-8;
        }
        
        .tr-9 {
          grid-area: tr-9;
        }
        
        .tr-10 {
          grid-area: tr-10;
        }
        
        .tr-11 {
          grid-area: tr-11;
        }
        
        .tr-12 {
          grid-area: tr-12;
        }
        
        .tr-13 {
          grid-area: tr-13;
        }
        
        .tr-14 {
          grid-area: tr-14;
        }
        
        .tr-15 {
          grid-area: tr-15;
        }
        
        .tr-16 {
          grid-area: tr-16;
        }
        
        .tr-17 {
          grid-area: tr-17;
        }
        
        .tr-18 {
          grid-area: tr-18;
        }
        
        .tr-19 {
          grid-area: tr-19;
        }
        
        .tr-20 {
          grid-area: tr-20;
        }
        
        .tr-21 {
          grid-area: tr-21;
        }
        
        .tr-22 {
          grid-area: tr-22;
        }
        
        .tr-23 {
          grid-area: tr-23;
        }
        
        .tr-24 {
          grid-area: tr-24;
        }
        
        .tr-25 {
          grid-area: tr-25;
        }
        
        .tr-1:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
        }
        
        .tr-2:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
        }
        
        .tr-3:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
        }
        
        .tr-4:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
        }
        
        .tr-5:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
        }
        
        .tr-6:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
        }
        
        .tr-7:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
        }
        
        .tr-8:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
        }
        
        .tr-9:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
        }
        
        .tr-10:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
        }
        
        .tr-11:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
        }
        
        .tr-12:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
        }
        
        .tr-13:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
        
        .tr-14:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
        }
        
        .tr-15:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
        }
        
        .tr-16:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
        }
        
        .tr-17:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
        }
        
        .tr-18:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
        }
        
        .tr-19:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
        }
        
        .tr-20:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
        }
        
        .tr-21:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
        }
        
        .tr-22:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
        }
        
        .tr-23:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
        }
        
        .tr-24:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
        }
        
        .tr-25:hover ~ #card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
        }
        
        .noselect {
          -webkit-touch-callout: none;
           /* iOS Safari */
          -webkit-user-select: none;
           /* Safari */
           /* Konqueror HTML */
          -moz-user-select: none;
           /* Old versions of Firefox */
          -ms-user-select: none;
           /* Internet Explorer/Edge */
          user-select: none;
        }
        `,
        metadata: {
          id: '18',
          name: '',
          type: 'card',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element19: {
        html: '<div class="loader19"> <div class="box box-1"> <div class="side-left"></div> <div class="side-right"></div> <div class="side-top"></div> </div> <div class="box box-2"> <div class="side-left"></div> <div class="side-right"></div> <div class="side-top"></div> </div> <div class="box box-3"> <div class="side-left"></div> <div class="side-right"></div> <div class="side-top"></div> </div> <div class="box box-4"> <div class="side-left"></div> <div class="side-right"></div> <div class="side-top"></div> </div> </div>',
        css: `
        .loader19{
          scale: 3;
          height: 50px;
          width: 40px;
        }
        
        .box {
          position: relative;
          opacity: 0;
          left: 10px;
        }
        
        .side-left {
          position: absolute;
          background-color: #286cb5;
          width: 19px;
          height: 5px;
          transform: skew(0deg, -25deg);
          top: 14px;
          left: 10px;
        }
        
        .side-right {
          position: absolute;
          background-color: #2f85e0;
          width: 19px;
          height: 5px;
          transform: skew(0deg, 25deg);
          top: 14px;
          left: -9px;
        }
        
        .side-top {
          position: absolute;
          background-color: #5fa8f5;
          width: 20px;
          height: 20px;
          rotate: 45deg;
          transform: skew(-20deg, -20deg);
        }
        
        .box-1 {
          animation: from-left 4s infinite;
        }
        
        .box-2 {
          animation: from-right 4s infinite;
          animation-delay: 1s;
        }
        
        .box-3 {
          animation: from-left 4s infinite;
          animation-delay: 2s;
        }
        
        .box-4 {
          animation: from-right 4s infinite;
          animation-delay: 3s;
        }
        
        @keyframes from-left {
          0% {
            z-index: 20;
            opacity: 0;
            translate: -20px -6px;
          }
        
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
        
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
        
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
        
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
        
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }
        
        @keyframes from-right {
          0% {
            z-index: 20;
            opacity: 0;
            translate: 20px -6px;
          }
        
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
        
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
        
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
        
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
        
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }
        `,  
        metadata: {
          id: '19',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element20: {
        html: '<button class="ui-btn elem-185808"><span class="elem-185809">Button</span></button>        ',
        css: `
        .ui-btn.elem-185808 {
          --btn-default-bg: rgb(41, 41, 41);
          --btn-padding: 15px 20px;
          --btn-hover-bg: rgb(51, 51, 51);
          --btn-transition: .3s;
          --btn-letter-spacing: .1rem;
          --btn-animation-duration: 1.2s;
          --btn-shadow-color: rgba(0, 0, 0, 0.137);
          --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
          --hover-btn-color: #FAC921;
          --default-btn-color: #fff;
          --font-size: 16px;
          --font-weight: 600;
          --font-family: Menlo,Roboto Mono,monospace;
        }
        
        .ui-btn.elem-185808 {
          box-sizing: border-box;
          padding: var(--btn-padding);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--default-btn-color);
          font: var(--font-weight) var(--font-size) var(--font-family);
          background: var(--btn-default-bg);
          border: none;
          cursor: pointer;
          transition: var(--btn-transition);
          overflow: hidden;
          box-shadow: var(--btn-shadow);
        }
        
        .ui-btn.elem-185808 span.elem-185809 {
          letter-spacing: var(--btn-letter-spacing);
          transition: var(--btn-transition);
          box-sizing: border-box;
          position: relative;
          background: inherit;
        }
        
        .ui-btn.elem-185808 span.elem-185809::before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          background: inherit;
        }
        
        .ui-btn.elem-185808:hover,
        .ui-btn.elem-185808:focus {
          background: var(--btn-hover-bg);
        }
        
        .ui-btn.elem-185808:hover span.elem-185809,
        .ui-btn.elem-185808:focus span.elem-185809 {
          color: var(--hover-btn-color);
        }
        
        .ui-btn.elem-185808:hover span.elem-185809::before,
        .ui-btn.elem-185808:focus span.elem-185809::before {
          animation: chitchat linear both var(--btn-animation-duration);
        }
        
        @keyframes chitchat {
          0% {
            content: "#";
          }
        
          5% {
            content: ".";
          }
        
          10% {
            content: "^{";
          }
        
          15% {
            content: "-!";
          }
        
          20% {
            content: "#$_";
          }
        
          25% {
            content: "№:0";
          }
        
          30% {
            content: "#{+.";
          }
        
          35% {
            content: "@}-?";
          }
        
          40% {
            content: "?{4@%";
          }
        
          45% {
            content: "=.,^!";
          }
        
          50% {
            content: "?2@%";
          }
        
          55% {
            content: "\;1}]";
          }
        
          60% {
            content: "?{%:%";
            right: 0;
          }
        
          65% {
            content: "|{f[4";
            right: 0;
          }
        
          70% {
            content: "{4%0%";
            right: 0;
          }
        
          75% {
            content: "'1_0<";
            right: 0;
          }
        
          80% {
            content: "{0%";
            right: 0;
          }
        
          85% {
            content: "]>'";
            right: 0;
          }
        
          90% {
            content: "4";
            right: 0;
          }
        
          95% {
            content: "2";
            right: 0;
          }
        
          100% {
            content: "";
            right: 0;
          }
        }
        
        `,
        metadata: {
          id: '20',
          name: '',
          type: 'button',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element21: {
        html: '<div class="loader21"></div>',
        css: `
        .loader21{
            border-top: 8px solid hotpink;
            border-bottom: 8px solid #f55951;
            border-left: 8px solid #3a9efd;
            border-right: 8px solid #1fff7c;
            border-radius: 100%;
            height: 100px;
            width: 100px;
            animation: looper 5s infinite ease-in-out;
          }
          
          @keyframes looper {
            0% {
              border-radius: 100% 100% 100% 100%;
              border-color: hotpink #3a9efd #1fff7c #f55951;
            }
          
            10% {
              border-radius: 0% 100% 0% 0%;
              border-color: #f55951;
              transform: rotate(150deg);
            }
          
            20% {
              border-radius: 0% 0% 0% 0%;
              border-color: #3a9efd;
            }
          
            30% {
              border-radius: 0% 0% 0% 0%;
              border-color: #1fff7c;
            }
          
            40% {
              border-radius: 0% 0% 0% 0%;
              border-color: #3a9efd;
            }
          
            50% {
              border-radius: 100%;
              border-color: #f55951;
            }
          
            90% {
              border-radius: 100%;
              transform: rotate(360deg);
              border-style: dashed;
            }
          
            100% {
              transform: rotate(0deg);
              border-radius: 100% 100% 100% 100%;
              border-color: hotpink #3a9efd #1fff7c #f55951;
            }
          }
        `,
        metadata: {
          id: '21',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element22: {
        html: '<div class="loader22"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div>',
        css: `
        .loader22 {
            position: relative;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            transform: perspective(500px) rotateX(60deg);
          }
          
          .loader22 span {
            position: absolute;
            display: block;
            border: 5px solid #000;
            box-shadow: 0 5px 0 #ccc;
            inset: 0 5px 0 #ccc;
            box-sizing: border-box;
            border-radius: 50%;
            animation: animate 3s ease-in-out infinite;
          }
          
          @keyframes animate {
            0%,100% {
              transform: translateZ(-100px);
            }
          
            50% {
              transform: translateZ(100px);
            }
          }
          
          .loader22 span:nth-child(1) {
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            animation-delay: 1.4s;
          }
          
          .loader22 span:nth-child(2) {
            top: 10px;
            left: 10px;
            bottom: 10px;
            right: 10px;
            animation-delay: 1.3s;
          }
          
          .loader22 span:nth-child(3) {
            top: 20px;
            left: 20px;
            bottom: 20px;
            right: 20px;
            animation-delay: 1.2s;
          }
          
          .loader22 span:nth-child(4) {
            top: 30px;
            left: 30px;
            bottom: 30px;
            right: 30px;
            animation-delay: 1.1s;
          }
          
          .loader22 span:nth-child(5) {
            top: 40px;
            left: 40px;
            bottom: 40px;
            right: 40px;
            animation-delay: 1s;
          }
          
          .loader22 span:nth-child(6) {
            top: 50px;
            left: 50px;
            bottom: 50px;
            right: 50px;
            animation-delay: 0.9s;
          }
          
          .loader22 span:nth-child(7) {
            top: 60px;
            left: 60px;
            bottom: 60px;
            right: 60px;
            animation-delay: 0.8s;
          }
          
          .loader22 span:nth-child(8) {
            top: 70px;
            left: 70px;
            bottom: 70px;
            right: 70px;
            animation-delay: 0.7s;
          }
          
          .loader22 span:nth-child(9) {
            top: 80px;
            left: 80px;
            bottom: 80px;
            right: 80px;
            animation-delay: 0.6s;
          }
          
          .loader22 span:nth-child(10) {
            top: 90px;
            left: 90px;
            bottom: 90px;
            right: 90px;
            animation-delay: 0.5s;
          }
          
          .loader22 span:nth-child(11) {
            top: 100px;
            left: 100px;
            bottom: 100px;
            right: 100px;
            animation-delay: 0.4s;
          }
          
          .loader22 span:nth-child(12) {
            top: 110px;
            left: 110px;
            bottom: 110px;
            right: 110px;
            animation-delay: 0.3s;
          }
          
          .loader22 span:nth-child(13) {
            top: 120px;
            left: 120px;
            bottom: 120px;
            right: 120px;
            animation-delay: 0.2s;
          }
          
          .loader22 span:nth-child(14) {
            top: 130px;
            left: 130px;
            bottom: 130px;
            right: 130px;
            animation-delay: 0.1s;
          }
          
          .loader22 span:nth-child(15) {
            top: 140px;
            left: 140px;
            bottom: 140px;
            right: 140px;
            animation-delay: 0s;
          }
        `,
        metadata: {
          id: '22',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element23: {
        html: '<div class="container elem-185792"><span class="elem-185793"></span><span class="elem-185794"></span><span class="elem-185795"></span><span class="elem-185796"></span></div>',
        css: `
        .container.elem-185792 {
            position:relative;
            border-radius: 50%;
            height: 96px;
            width: 96px;
            animation: rotate_3922 1.2s linear infinite;
            background-color: #9b59b6;
            background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
          }
          
          .container.elem-185792 span.elem-185793,
          .container.elem-185792 span.elem-185794,
          .container.elem-185792 span.elem-185795,
          .container.elem-185792 span.elem-185796 {
            position: absolute;
            border-radius: 50%;
            height: 100%;
            width: 100%;
            background-color: #9b59b6;
            background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
          }
          
          .container.elem-185792 span.elem-185793 {
            filter: blur(5px);
          }
          
          .container.elem-185792 span.elem-185794 {
            filter: blur(10px);
          }
          
          .container.elem-185792 span.elem-185795 {
            filter: blur(25px);
          }
          
          .container.elem-185792 span.elem-185796 {
            filter: blur(50px);
          }
          
          .container.elem-185792::after {
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            background-color: #fff;
            border: solid 5px #ffffff;
            border-radius: 50%;
          }
          
          @keyframes rotate_3922 {
            from {
              transform: rotate(0deg);
            }
          
            to {
              transform: rotate(360deg);
            }
          }
          
        `,
        metadata: {
          id: '23',
          name: '',
          type: 'loader',
          creator: 'nurs@mail.ru',
          views: '12000',
        },
    },
    element24: {
        html: `
        <div class="xjklsd-input-wrapper">
        <input type="text" placeholder="Type here..." name="text" class="akjsdf-input">
        </div>
        `,
        css: `
        .xjklsd-input-wrapper input {
          background-color: #eee;
          border: none;
          padding: 1rem;
          font-size: 1rem;
          width: 13em;
          border-radius: 1rem;
          color: lightcoral;
          box-shadow: 0 0.4rem #dfd9d9;
          cursor: pointer;
        }
        
        .xjklsd-input-wrapper input:focus {
          outline-color: lightcoral;
        }
        
        `,
        metadata: {
          id: '24',
          name: '',
          type: 'input',
          creator: 'nurs@mail.ru',
          views: '12000',
          sells: '3245'
        },
    },
    element25: {
        html: `
        <div class="sdfg23-input-group">
        <input required="" type="text" name="text" autocomplete="off" class="qwe43-input">
        <label class="asdf-user-label">First Name</label>
        </div>
        `,  
        css: `
        .sdfg23-input-group {
          position: relative;
        }
        
        .qwe43-input {
          border: solid 1.5px #9e9e9e;
          border-radius: 1rem;
          background: none;
          padding: 1rem;
          font-size: 1rem;
          color: #454545;
          transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .asdf-user-label {
          position: absolute;
          left: 15px;
          color: #454545;
          pointer-events: none;
          transform: translateY(1rem);
          transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .qwe43-input:focus,
        .qwe43-input input:valid {
          outline: none;
          border: 1.5px solid #1a73e8;
        }
        
        .qwe43-input:focus ~ .asdf-user-label,
        .qwe43-input input:valid ~ .asdf-user-label {
          transform: translateY(-50%) scale(0.8);
          background-color: #fff;
          padding: 0 .2em;
          color: #2196f3;
        }
        
        `,
        metadata: {
          id: '25',
          name: '',
          type: 'input',
          creator: 'nurs@mail.ru',
          views: '12000',
          sells: '3245'
        },
    },
    element26: {
      html: `
        <div class="vds84-group">
        <svg class="dsfg-icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
        </svg>
        <input placeholder="Search" type="search" class="sdf45-input">
       </div>

      `,
      css: `
      .vds84-group {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        max-width: 190px;
      }
      
      .sdf45-input {
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        width: 100%;
        padding-left: 2.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #D9E8D8;
        color: #0d0c22;
        box-shadow: 0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb;
        transition: .3s ease;
      }
      
      .sdf45-input::placeholder {
        color: #777;
      }
      
      .dsfg-icon {
        position: absolute;
        left: 1rem;
        fill: #777;
        width: 1rem;
        height: 1rem;
      }
      `,
      metadata: {
        id: '26',
        name: '',
        type: 'input',
        creator: 'nurs@mail.ru',
        views: '12000',
        sells: '3245'
      },
  },
   element27: {
        html: `
        <input type="text" name="text" class="jsr4f-input" placeholder="Type your text">
        `,
        css: `
        .jsr4f-input {
          background-color: #383838;
          border: 1ex solid none;
          border-top-width: 1.7em;
          margin: 0;
          padding: 0;
          color: #383838;
          word-wrap: break-word;
          outline: 7px solid #383838;
          height: 30px;
          font-size: 17px;
          text-align: center;
          transition: all 1s;
          max-width: 190px;
          font-weight: bold;
          font-family: 'Courier New', Courier, monospace;
        }
        
        .jsr4f-input:hover {
          border-top-width: 0.2em;
          background-color: #f1e8e8;
        }
        
        .jsr4f-input:focus {
          border-top-width: 0.2em;
          background-color: #f1e8e8;
        }
        `,
        metadata: {
          id: '27',
          name: '',
          type: 'input',
          creator: 'nurs@mail.ru',
          views: '12000',
          sells: '3245'
        },
    },
    element28: {
      html: `
      <button id="custom-btn">
        Button
      </button>
      `,
      css: `
      #custom-btn {
        padding: 10px 20px;
        text-transform: uppercase;
        border-radius: 8px;
        font-size: 17px;
        font-weight: 500;
        color: #00080;
        text-shadow: none;
        background: transparent;
        box-shadow: transparent;
        border: 1px solid #ffffff80;
        transition: 0.5s ease;
        user-select: none;
      }
      
      #custom-btn:hover, #custom-btn:focus {
        color: #ffffff;
        background: #008cff;
        border: 1px solid #008cff;
        text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
        box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
      }
      
      `,
      metadata: {
        id: '28',
        name: '',
        type: 'button',
        creator: 'nurs@mail.ru',
        views: '12000',
        sells: '3245'
      },
  },
  element29: {
    html: `
    <button class="custom-btn1232">Button</button>
    `,
    css: `
    .custom-btn1232{
      font-size: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: inline-block;
      text-align: center;
      font-weight: bold;
      padding: 0.7em 2em;
      border: 3px solid #FF0072;
      border-radius: 2px;
      position: relative;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
      color: #FF0072;
      text-decoration: none;
      transition: 0.3s ease all;
      z-index: 1;
    }
    
    .custom-btn1232:before {
      transition: 0.5s all ease;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      bottom: 0;
      opacity: 0;
      content: '';
      background-color: #FF0072;
      z-index: -1;
    }
    
    .custom-btn1232:hover, .custom-btn1232:focus {
      color: white;
    }
    
    .custom-btn1232:hover:before, .custom-btn1232:focus:before {
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
    
    .custom-btn1232:active {
      transform: scale(0.9);
    }
    
    `,
    metadata: {
      id: '29',
      name: '',
      type: 'button',
      creator: 'nurs@mail.ru',
      views: '12000',
      sells: '3245'
    },
},
element30: {
  html: `
  <label class="burger-f8f36126" for="burger-f8f36126">
  <input type="checkbox" id="burger-f8f36126">
  <span class="span-f8f36126"></span>
  <span class="span-f8f36126"></span>
  <span class="span-f8f36126"></span>
  </label>

  `,
  css: `
  .burger-f8f36126 {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
  }
  
  .burger-f8f36126 input {
    display: none;
  }
  
  .burger-f8f36126 span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  
  .burger-f8f36126 span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }
  
  .burger-f8f36126 span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }
  
  .burger-f8f36126 span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }
  
  .burger-f8f36126 input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }
  
  .burger-f8f36126 input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }
  
  .burger-f8f36126 input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
  
  `,
  metadata: {
    id: '30',
    name: '',
    type: 'checkbox',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element31: {
  html: `
  <div id="loader-7c3f85e9"></div>
  `,
  css: `
  #loader-7c3f85e9 {
    width: 48px;
    height: 48px;
    margin: auto;
    position: relative;
  }
  
  #loader-7c3f85e9:before {
    content: '';
    width: 48px;
    height: 5px;
    background: #f0808050;
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadow324-7c3f85e9 0.5s linear infinite;
  }
  
  #loader-7c3f85e9:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: jump7456-7c3f85e9 0.5s linear infinite;
  }
  
  @keyframes jump7456-7c3f85e9 {
    15% {
      border-bottom-right-radius: 3px;
    }
  
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
  
    50% {
      transform: translateY(18px) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
  
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
  
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  
  @keyframes shadow324-7c3f85e9 {
  
    0%, 100% {
      transform: scale(1, 1);
    }
  
    50% {
      transform: scale(1.2, 1);
    }
  }
  
  `,
  metadata: {
    id: '31',
    name: '',
    type: 'loader',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element32: {
  html: `
  <label class="container-8e4312a2">
  <input checked="checked" type="checkbox" id="checkbox-8e4312a2">
  <div class="checkmark-8e4312a2"></div>
  </label>
  `,
  css: `
  .container-8e4312a2 {
    --input-focus: #2d8cf0;
    --input-out-of-focus: #ccc;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    position: relative;
    cursor: pointer;
  }
  
  .container-8e4312a2 input {
    position: absolute;
    opacity: 0;
  }
  
  .checkmark-8e4312a2 {
    width: 30px;
    height: 30px;
    position: relative;
    top: 0;
    left: 0;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--input-out-of-focus);
    transition: all 0.3s;
  }
  
  .container-8e4312a2 input:checked ~ .checkmark-8e4312a2 {
    background-color: var(--input-focus);
  }
  
  .checkmark-8e4312a2:after {
    content: "";
    width: 7px;
    height: 15px;
    position: absolute;
    top: 2px;
    left: 8px;
    display: none;
    border: solid var(--bg-color);
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45
  
  `,
  metadata: {
    id: '32',
    name: '',
    type: 'checkbox',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element33: {
  html: `
  <div class="container-0e6fd92a">
  <div class="pane-0e6fd92a">
      <label class="label-0e6fd92a">
          <span>Yes</span>
          <input id="left" class="input-0e6fd92a" name="radio" type="radio">
      </label>
      <label class="label-0e6fd92a">
          <span>No</span>
          <input id="middle" class="input-0e6fd92a" checked="checked" name="radio" type="radio">
      </label>
      <label class="label-0e6fd92a">
          <span>Idk</span>
          <input id="right" class="input-0e6fd92a" name="radio" type="radio">
      </label>
      <span class="selection-0e6fd92a"></span>
  </div>
  </div>
  `,
  css: `
  .container-0e6fd92a {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .pane-0e6fd92a {
    outline: 2px solid #000;
    box-shadow: 0 0 10px #00077, inset 0 0 10px #00077;
    height: 1cm;
    width: 4.5cm;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.7s ease;
  }
  
  .input-0e6fd92a {
    display: none;
  }
  
  .label-0e6fd92a {
    height: 1cm;
    width: 1.5cm;
    float: left;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
    padding: 0px;
    position: relative;
    z-index: 1;
    color: #000;
    text-align: center;
    padding-top: 10px;
  }
  
  .selection-0e6fd92a {
    display: none;
    position: absolute;
    height: 1cm;
    width: calc(4.5cm / 3);
    z-index: 0;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px #00077;
    transition: .15s ease;
  }
  
  .label-0e6fd92a:has(input:checked) {
    color: #fff;
  }
  
  .pane-0e6fd92a:has(.label-0e6fd92a:nth-child(1):hover) {
    transform: rotateY(-30deg);
  }
  
  .pane-0e6fd92a:has(.label-0e6fd92a:nth-child(3):hover) {
    transform: rotateY(35deg);
  }
  
  .label-0e6fd92a:has(input:checked) ~ .selection-0e6fd92a {
    background-color: #000;
    display: inline-block;
  }
  
  .label-0e6fd92a:nth-child(1):has(input:checked) ~ .selection-0e6fd92a {
    transform: translateX(calc(4.5cm * 0/3));
  }
  
  .label-0e6fd92a:nth-child(2):has(input:checked) ~ .selection-0e6fd92a {
    transform: translateX(calc(4.5cm * 1/3));
  }
  
  .label-0e6fd92a:nth-child(3):has(input:checked) ~ .selection-0e6fd92a {
    transform: translateX(calc(4.5cm * 2/3));
  }
  
  `,
  metadata: {
    id: '33',
    name: '',
    type: 'radio',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element34: {
  html: `
  <div class="customCheckBoxHolder-7c8e3ac">
  <input class="customCheckBoxInput-7c8e3ac" id="cCB1" type="checkbox">
  <label class="customCheckBoxWrapper-7c8e3ac" for="cCB1">
      <div class="customCheckBox-7c8e3ac">
          <div class="inner-7c8e3ac">Option</div>
      </div>
  </label>
  <input class="customCheckBoxInput-7c8e3ac" id="cCB2" type="checkbox">
  <label class="customCheckBoxWrapper-7c8e3ac" for="cCB2">
      <div class="customCheckBox-7c8e3ac">
          <div class="inner-7c8e3ac">Option</div>
      </div>
  </label>
  <input class="customCheckBoxInput-7c8e3ac" id="cCB3" type="checkbox">
  <label class="customCheckBoxWrapper-7c8e3ac" for="cCB3">
      <div class="customCheckBox-7c8e3ac">
          <div class="inner-7c8e3ac">Option</div>
      </div>
  </label>
  </div>
  `,
  css: `
  .customCheckBoxHolder-7c8e3ac {
    margin: 5px;
    display: flex;
  }
  
  .customCheckBox-7c8e3ac {
    width: fit-content;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    padding: 2px 8px;
    background-color: rgba(0, 0, 0, 0.16);
    border-radius: 0px;
    color: rgba(255, 255, 255, 0.7);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 300ms;
    transition-property: color, background-color, box-shadow;
    display: flex;
    height: 32px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
    outline: none;
    justify-content: center;
    min-width: 55px;
  }
  
  .customCheckBox-7c8e3ac:hover {
    background-color: #2c2c2c;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  }
  
  .customCheckBox-7c8e3ac .inner-7c8e3ac {
    font-size: 18px;
    font-weight: 900;
    pointer-events: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 300ms;
    transition-property: transform;
    transform: translateY(0px);
  }
  
  .customCheckBox-7c8e3ac:hover .inner-7c8e3ac {
    transform: translateY(-2px);
  }
  
  .customCheckBoxWrapper-7c8e3ac:first-of-type .customCheckBox-7c8e3ac {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-right: 0px;
  }
  
  .customCheckBoxWrapper-7c8e3ac:last-of-type .customCheckBox-7c8e3ac {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-left: 0px;
  }
  
  .customCheckBoxInput-7c8e3ac {
    display: none;
  }
  
  .customCheckBoxInput-7c8e3ac:checked + .customCheckBoxWrapper-7c8e3ac .customCheckBox-7c8e3ac {
    background-color: #2d6737;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  
  `,
  metadata: {
    id: '34',
    name: '',
    type: 'radio',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element35: {
  html: `
  <div class="card-4eac1e0">
  <h4 class="title-4eac1e0">Log In!</h4>
  <form>
    <div class="field-4eac1e0">
      <svg class="input-icon-4eac1e0" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path></svg>
      <input autocomplete="off" id="logemail" placeholder="Email" class="input-field-4eac1e0" name="logemail" type="email">
    </div>
    <div class="field-4eac1e0">
      <svg class="input-icon-4eac1e0" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
      <input autocomplete="off" id="logpass" placeholder="Password" class="input-field-4eac1e0" name="logpass" type="password">
    </div>
    <button class="btn-4eac1e0" type="submit">Login</button>
    <a href="#" class="btn-link-4eac1e0">Forgot your password?</a>
  </form>
  </div>  
  `,
  css: `
  .card-4eac1e0 {
    width: 190px;
    padding: 1.9rem 1.2rem;
    text-align: center;
    background: #2a2b38;
   }
   
   /*Inputs*/
   .field-4eac1e0 {
    margin-top: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    background-color: #1f2029;
    border-radius: 4px;
    padding: .5em 1em;
   }
   
   .input-icon-4eac1e0 {
    height: 1em;
    width: 1em;
    fill: #ffeba7;
   }
   
   .input-field-4eac1e0 {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
   }
   
   /*Text*/
   .title-4eac1e0 {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: #f5f5f5;
   }
   
   /*Buttons*/
   .btn-4eac1e0 {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: .8em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color: #ffeba7;
    color: #5e6681;
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all .3s ease-in-out;
   }
   
   .btn-link-4eac1e0 {
    color: #f5f5f5;
    display: block;
    font-size: .75em;
    transition: color .3s ease-out;
   }
   
   /*Hover & focus*/
   .field-4eac1e0 input:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
   }
   
   .btn-4eac1e0:hover {
    background-color: #5e6681;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
   }
   
   .btn-link-4eac1e0:hover {
    color: #ffeba7;
   }
  `,
  metadata: {
    id: '35',
    name: '',
    type: 'form',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element36: {
  html: `
  <form class="form-7c49b21">
  <input placeholder="Enter your name" class="input-7c49b21" type="text">
  <input placeholder="Enter your email" class="input-7c49b21" type="text">
  <input placeholder="*********" class="input-7c49b21" type="password">

  <button class="btn-7c49b21">Submit</button>
  </form>
  `,
  css: `
  .form-7c49b21 {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: linear-gradient(to bottom, #0077be, #3b8df2);
    border-radius: 10px;
    overflow: hidden;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform: rotateX(-10deg);
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    animation: form-animation-7c49b21 0.5s ease-in-out;
  }
  
  @keyframes form-animation-7c49b21 {
    from {
      transform: rotateX(-30deg);
      opacity: 0;
    }
  
    to {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
  
  .input-7c49b21 {
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    color: rgb(255, 255, 255);
    border: 2px solid #3b8df2;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  
  .input-7c49b21::placeholder {
    color: #fff;
  }
  
  .input-7c49b21:hover,
  .input-7c49b21:focus {
    border-color: #3b8df2;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05) rotateY(20deg);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    outline: none;
  }
  
  .btn-7c49b21 {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #3b8df2;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: rotateX(-10deg);
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  
  .btn-7c49b21:hover {
    background-color: #0077be;
    font-size: 17px;
    transform: scale(1.05) rotateY(20deg) rotateX(10deg);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  `,
  metadata: {
    id: '36',
    name: '',
    type: 'form',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element37: {
  html: `
  <div class="container-abcdef">
  <div class="palette">
    <div class="color color-123456"><span>264653</span></div>
    <div class="color color-234567"><span>2A9D8F</span></div>
    <div class="color color-345678"><span>E9C46A</span></div>
    <div class="color color-456789"><span>F4A261</span></div>
    <div class="color color-567890"><span>E76F51</span></div>
  </div>
  <div id="stats-abcdef">
    <span>53421 saves</span>
  </div>
  </div>
  `,
  css: `
  .container-abcdef {
    height: 200px;
    width: 250px;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 10px 20px #dbdbdb;
    font-family: sans-serif;
  }
  
  .palette {
    display: flex;
    height: 86%;
    width: 100%;
  }
  
  .color {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    transition: flex 0.1s linear;
  }
  
  .color span {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
  
  .color-123456 {
    background: #264653;
  }
  
  .color-234567 {
    background: #2a9d8f;
  }
  
  .color-345678 {
    background: #e9c46a;
  }
  
  .color-456789 {
    background: #f4a261;
  }
  
  .color-567890 {
    background: #e76f51;
  }
  
  .color:hover {
    flex: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  
  .color:hover span {
    opacity: 1;
  }
  
  #stats-abcdef {
    height: 14%;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
    box-sizing: border-box;
    color: #bebebe;
  }
  
  #stats-abcdef svg {
    fill: #bebebe;
    transform: scale(1.2);
  }
  
  `,
  metadata: {
    id: '37',
    name: '',
    type: 'card',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element38: {
  html: `
  <div class="forgot-password-form-container-123456">
  <div class="forgot-password-logo-container-123456">
    Forgot Password
  </div>

  <form class="forgot-password-form-123456">
    <div class="forgot-password-form-group-123456">
      <label for="forgot-password-email-123456">Email</label>
      <input type="text" id="forgot-password-email-123456" name="email" placeholder="Enter your email" required="">
    </div>

    <button class="forgot-password-form-submit-btn-123456" type="submit">Send Email</button>
  </form>

  <p class="forgot-password-signup-link-123456">
    Don't have an account?
    <a href="#" class="forgot-password-link-123456"> Sign up now</a>
  </p>
</div>
  `,
  css: `
  <style>
  .forgot-password-form-container-123456 {
    max-width: 400px;
    background-color: #fff;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: #212121;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .forgot-password-form-container-123456 button:active {
    scale: 0.95;
  }

  .forgot-password-form-container-123456 .forgot-password-logo-container-123456 {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }

  .forgot-password-form-container-123456 .forgot-password-form-123456 {
    display: flex;
    flex-direction: column;
  }

  .forgot-password-form-container-123456 .forgot-password-form-group-123456 {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .forgot-password-form-container-123456 .forgot-password-form-group-123456 label {
    display: block;
    margin-bottom: 5px;
  }

  .forgot-password-form-container-123456 .forgot-password-form-group-123456 input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
  }

  .forgot-password-form-container-123456 .forgot-password-form-group-123456 input::placeholder {
    opacity: 0.5;
  }

  .forgot-password-form-container-123456 .forgot-password-form-group-123456 input:focus {
    outline: none;
    border-color: #1778f2;
  }

  .forgot-password-form-container-123456 .forgot-password-form-submit-btn-123456 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #fff;
    background-color: #212121;
    border: none;
    width: 100%;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .forgot-password-form-container-123456 .forgot-password-form-submit-btn-123456:hover {
    background-color: #313131;
  }

  .forgot-password-form-container-123456 .forgot-password-link-123456 {
    color: #1778f2;
    text-decoration: none;
  }

  .forgot-password-form-container-123456 .forgot-password-signup-link-123456 {
    align-self: center;
    font-weight: 500;
  }

  .forgot-password-form-container-123456 .forgot-password-signup-link-123456 .forgot-password-link-123456 {
    font-weight: 400;
  }

  .forgot-password-form-container-123456 .forgot-password-link-123456:hover {
    text-decoration: underline;
  }
</style>

<div class="forgot-password-form-container-123456">
  <div class="forgot-password-logo-container-123456">
    Forgot Password
  </div>

  <form class="forgot-password-form-123456">
    <div class="forgot-password-form-group-123456">
      <label for="forgot-password-email-123456">Email</label>
      <input type="text" id="forgot-password-email-123456" name="email" placeholder="Enter your email" required="">
    </div>

    <button class="forgot-password-form-submit-btn-123456" type="submit">Send Email</button>
  </form>

  <p class="forgot-password-signup-link-123456">
    Don't have an account?
    <a href="#" class="forgot-password-link-123456"> Sign up now</a>
  </p>
</div>
  `,
  metadata: {
    id: '38',
    name: '',
    type: 'form',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element39: {
  html: `
  <div class="card-123456">HOVER</div>
  `,
  css: `
  .card-123456 {
    position: relative;
    width: 220px;
    height: 250px;
    background: mediumturquoise;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
  }
  
  .card-123456::before,
  .card-123456::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: lightblue;
    transition: all 0.5s;
  }
  
  .card-123456::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }
  
  .card-123456::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100%  0 15px;
  }
  
  .card-123456:hover::before,
  .card-123456:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }
  
  .card-123456:hover:after {
    content: "HELLO";
  }
  
  `,
  metadata: {
    id: '39',
    name: '',
    type: 'card',
    creator: 'nurs@mail.ru',
    views: '12000',
    sells: '3245'
  },
},
element40: {
  html: `
  <label class="switch-abcdef">
  <input checked="" type="checkbox" class="toggle-abcdef">
  <span class="slider-abcdef"></span>
  <span class="card-side-abcdef"></span>
  </label>
  `,
  css: `
  .switch-abcdef {
    --input-focus: #2d8cf0;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    --input-out-of-focus: #ccc;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 70px;
    height: 36px;
    transform: translateX(calc(50% - 10px));
  }
  
  .toggle-abcdef {
    opacity: 0;
  }
  
  .slider-abcdef {
    box-sizing: border-box;
    border-radius: 100px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--input-out-of-focus);
    transition: 0.3s;
  }
  
  .slider-abcdef:before {
    content: "off";
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 2px;
    bottom: 1px;
    border: 2px solid var(--main-color);
    border-radius: 100px;
    background-color: var(--bg-color);
    color: var(--main-color);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 25px;
    transition: 0.3s;
  }
  
  .toggle-abcdef:checked + .slider-abcdef {
    background-color: var(--input-focus);
    transform: translateX(-32px);
  }
  
  .toggle-abcdef:checked + .slider-abcdef:before {
    content: "on";
    transform: translateX(32px);
  }
  `,
  metadata: {
    id: '40',
    name: '',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '12000',
  },
},

element41:{
  html: `
    <label class="switch-uvwxyz">
      <input type="checkbox" checked="">
    </label>
  `,
  css:`
  .switch-uvwxyz {
    --false: #E81B1B;
    --true: #009068;
  }
  
  .switch-uvwxyz input[type=checkbox] {
    appearance: none;
    height: 25px;
    width: 50px;
    background-color: #000;
    position: relative;
    border-radius: .2em;
    cursor: pointer;
  }
  
  .switch-uvwxyz input[type=checkbox]::before {
    content: '';
    display: block;
    height: 1.9em;
    width: 1.9em;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: calc(1.9em/2 + .3em);
    background-color: var(--false);
    border-radius: .2em;
    transition: .3s ease;
  }
  
  .switch-uvwxyz input[type=checkbox]:checked::before {
    background-color: var(--true);
    left: calc(100% - (1.9em/2 + .3em));
  }
  
  `,
  metadata:{
    id: '41',
    name: '',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '5432',
  }
},

element42:{
  html: `
  <div class="content">
  <label class="switch switch-abc123">
    <input type="checkbox" class="input input-abc123">
    <span class="slider round slider-abc123"></span>
  </label>
  </div>
  `,
  css:`
  .switch-abc123 {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch-abc123 .input-abc123 {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .switch-abc123 .slider-abc123 {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6E6E6E;
    transition: .4s;
  }
  
  .switch-abc123 .slider-abc123:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123 {
    background-color: #1849AB;
  }
  
  .switch-abc123 .input-abc123:focus + .slider-abc123 {
    box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
    outline: none;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123:before {
    transform: translateX(26px);
  }
  
  .switch-abc123 .slider-abc123.round {
    border-radius: 34px;
  }
  
  .switch-abc123 .slider-abc123.round:before {
    border-radius: 50%;
  }
  `,
  metadata:{
    id: '42',
    name: '',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '5432',
  }
},

element43:{
  html: `
  <div class="content">
  <label class="switch switch-abc123">
    <input type="checkbox" class="input input-abc123">
    <span class="slider round slider-abc123"></span>
  </label>
  </div>
  `,
  css:`
  .switch-abc123 {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch-abc123 .input-abc123 {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .switch-abc123 .slider-abc123 {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6E6E6E;
    transition: .4s;
  }
  
  .switch-abc123 .slider-abc123:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123 {
    background-color: #1849AB;
  }
  
  .switch-abc123 .input-abc123:focus + .slider-abc123 {
    box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
    outline: none;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123:before {
    transform: translateX(26px);
  }
  
  .switch-abc123 .slider-abc123.round {
    border-radius: 34px;
  }
  
  .switch-abc123 .slider-abc123.round:before {
    border-radius: 50%;
  }
  `,
  metadata:{
    id: '42',
    name: '',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '5432',
  }
},

element44:{
  html: `
  <div class="content">
  <label class="switch switch-abc123">
    <input type="checkbox" class="input input-abc123">
    <span class="slider round slider-abc123"></span>
  </label>
  </div>
  `,
  css:`
  .switch-abc123 {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch-abc123 .input-abc123 {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .switch-abc123 .slider-abc123 {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6E6E6E;
    transition: .4s;
  }
  
  .switch-abc123 .slider-abc123:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123 {
    background-color: #1849AB;
  }
  
  .switch-abc123 .input-abc123:focus + .slider-abc123 {
    box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
    outline: none;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123:before {
    transform: translateX(26px);
  }
  
  .switch-abc123 .slider-abc123.round {
    border-radius: 34px;
  }
  
  .switch-abc123 .slider-abc123.round:before {
    border-radius: 50%;
  }
  `,
  metadata:{
    id: '44',
    name: 'UI Element',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '5432',
  }
},

element45:{
  html: `
  <div class="content">
  <label class="switch switch-abc123">
    <input type="checkbox" class="input input-abc123">
    <span class="slider round slider-abc123"></span>
  </label>
  </div>
  `,
  css:`
  .switch-abc123 {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch-abc123 .input-abc123 {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .switch-abc123 .slider-abc123 {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #6E6E6E;
    transition: .4s;
  }
  
  .switch-abc123 .slider-abc123:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123 {
    background-color: #1849AB;
  }
  
  .switch-abc123 .input-abc123:focus + .slider-abc123 {
    box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
    outline: none;
  }
  
  .switch-abc123 .input-abc123:checked + .slider-abc123:before {
    transform: translateX(26px);
  }
  
  .switch-abc123 .slider-abc123.round {
    border-radius: 34px;
  }
  
  .switch-abc123 .slider-abc123.round:before {
    border-radius: 50%;
  }
  `,
  metadata:{
    id: '42',
    name: '',
    type: 'toggle',
    creator: 'nurs@mail.ru',
    views: '5432',
  }
}


};
  
  export default elementsData;
  