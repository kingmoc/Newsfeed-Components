// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Headline {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.redX = this.domElement.querySelector('i');
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand'
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())

    this.redX.addEventListener('click', () => this.closeBox())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
    if(this.domElement.classList.contains('article-open')) {
      TweenMax.to(this.domElement, .8, {
        height: 400,    
        ease: Power4.easeOut,
      });
      this.expandButton.textContent = 'Click to Close'
    }
    else {
      TweenMax.to(this.domElement, .8, {
        height: 40,    
        ease: Power4.easeOut,
      });
      this.expandButton.textContent = 'Click to Expand'
    }
   
  }

  closeBox() {
    // this.domElement.style.display = 'none'
    TweenMax.to(this.domElement, .5, {
      scale: 0,    
      rotation: 180,
    });
    // this.domElement.style.display = 'none'
    console.log('trigger works!')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(headline => new Headline(headline)); 


