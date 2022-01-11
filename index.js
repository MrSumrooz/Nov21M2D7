
        /*  JS Exercises  */
      /*    EX11) Write a function to add a new link into the navbar    */

      let newLinkNav = function(){

        newLinkNode = document.querySelector(".nav");

        let createLink = document.createElement("a")
        createLink.innerHTML = "Sumrooz"
        newLinkNode.appendChild(createLink)



      }
      newLinkNav()
      
      /*  EX12) Write a function to change the color of the main title      */

        let titleColorChange = function(){

            let titleColorChangeNode = document.querySelector(".display-4")

            titleColorChangeNode.style.color = "blue";

        }

        titleColorChange()


     /*     EX13) Write a function to change the background of the jumbotron     */


     let changeBgColorJambotron = function(){

        let changeBgColorJambotronNode = document.querySelector(".jumbotron")
        changeBgColorJambotronNode.classList.remove("bg-dark");
        changeBgColorJambotronNode.style.backgroundColor = "red";
     }

     changeBgColorJambotron()

      /*    EX14) Write a function to remove all the links under "Elsewhere"     */

            let removeLinkElsewhere = function(){

                let removeLinkElsewhereNode = document.querySelector(".blog-sidebar div:nth-child(3) > ol")
                removeLinkElsewhereNode.remove();


            }
            removeLinkElsewhere()

      /*    EX15) Write a function to change the column size for heading in jumbotron    */
                let changeColumn = function(){
                    let changeColumnNode = document.querySelector(".jumbotron>div")
                    changeColumnNode.classList.remove("col-md-6");
                    changeColumnNode.classList.add("col-md-8")
                    
                } 

                changeColumn()


      /*    EX16) Write a function to remove the "Search" magnifying glass icon          */

      let removeSearchicon = function(){

        let removeSearchiconNode = document.querySelector(".blog-header div:nth-child(3) > a > svg")
        removeSearchiconNode.remove();
      }

      removeSearchicon()
      
      /*    EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post */
       /*   EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title) */
      /*    EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post         */
      /*    EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name */
      


