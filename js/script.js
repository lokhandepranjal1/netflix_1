function toggleFAQ(id)
{
    let faq=
    document.getElementById(id);
    if(faq.style.display==="block")
    {
        faq.style.display="none";
    }
    else{
        faq.style.display="block";
    }
}