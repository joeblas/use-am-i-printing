# Yo, Am I Printing?
A simple React hook for detecting if the browser is printing the page.

    npm i use-am-i-printing
After installing, import the hook into your component and do cool things while printing the page.

    import useAmIPrinting from 'use-am-i-printing'
    
    function App(){ 
      const isPrinting = useAmIPrinting()
      return (
        <div>
          { isPrinting ? 'I am printing' : 'I am not printing' }
        </div>
      )
    }
	
	export default App

Code responsibly.

