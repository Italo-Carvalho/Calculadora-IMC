function formatamoeda(numero) {
  
    return numero.toFixed(2).replace(".",",")}
  
  function Calcular(){ 
    peso = inputPeso.value
    altura = inputAltura.value
    IMC = (peso/(altura*altura))
  
     if (IMC < 17){
      BotaoCalcular.innerHTML="Seu IMC é "+formatamoeda(IMC)+". Você está muito abaixo do peso, procure um médico urgentemente 👨‍⚕️ "}
  
    if (IMC >= 17 && IMC <= 18.49){
      BotaoCalcular.innerHTML="Seu IMC é "+formatamoeda(IMC)+". Você está abaixo do peso, procure um nutricionista 🍎"}
  
    if (IMC >= 18.5 && IMC<= 24.99){
      BotaoCalcular.innerHTML="Seu IMC é "+formatamoeda(IMC)+". Seu peso está normal, continue assim! 🍎😊"}
  
    if (IMC >= 25 && IMC <= 29.99){
     BotaoCalcular.innerHTML="Seu IMC é "+formatamoeda(IMC)+". Você está acima do peso, faça exercícios 🏃"}
  
    if (IMC >= 30 && IMC <= 34.99){
      BotaoCalcular.innerHTML="Seu IMC é "+formatamoeda(IMC)+". Você está com Obesidade tipo I, procure um médico 👨‍⚕️"}
  
  if (IMC >= 35) {
      BotaoCalcular.innerHTML=("Seu IMC é "+formatamoeda(IMC)+" Você tem Obesidade tipo II, procure um médico urgentemente 👨‍⚕️")}
  
  
  }
  
  
  forcadedo=0
  function forcaclick(){
    forcadedo=1 + forcadedo
    Botaoforca.innerHTML=forcadedo + " flexões de dedo"
  }