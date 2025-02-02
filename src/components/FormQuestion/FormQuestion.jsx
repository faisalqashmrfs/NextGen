import'./FormQuestion.css'

export default function FormQuestion() {
  return (
    <div className='HM-FormQuestion'>
      
    <h2 className='hm-Form-Tittel'>Ask your question </h2>
    <div className='Hm-line'></div>
<div className='hm-Form-Container'>
<form >
<label >Name </label>
<input type="text" required placeholder="Enter your name"></input>
<label >Email </label>
<input type="text" required placeholder="Enter your email"></input>
<label >Your Question </label>
<textarea name="textbox" placeholder="Enter Your Question Here ....." rows="5" cols="20"></textarea>
</form> 
<button className='hm-Form-button'>Send Your Message</button>
</div>
</div>
  )
}
