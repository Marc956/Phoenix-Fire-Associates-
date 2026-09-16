function sendEnquiry(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const org=document.getElementById('org').value;
  const phone=document.getElementById('phone').value;
  const req=document.getElementById('req').value;
  const message=document.getElementById('message').value;
  const subject=encodeURIComponent("Phoenix Fire Associates enquiry - "+req);
  const body=encodeURIComponent(
    "Name: "+name+"\nOrganisation: "+org+"\nPhone: "+phone+
    "\nRequirement: "+req+"\nMessage: "+message
  );
  window.location.href="mailto:phoenixfireassociates1@gmail.com?subject="+subject+"&body="+body;
}
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.header nav')?.classList.toggle('open'));
