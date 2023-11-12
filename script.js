'use strict';

// document.querySelector('.baslik').textContent = "Sayıyı Tahmin Et."
// document.querySelector('#baslik').textContent = "Sayıyı Tahmin Et."
// document.querySelector('.message').textContent = "Tahmin başlıyor..."
// document.querySelector('.guess').value = 15;

let gizliSayi = Math.trunc(Math.random()*20)+1
let skor=20;
let highscore;
let temp;

document.querySelector('.check').addEventListener('click',function(){
    
    const tahmin = Number(document.querySelector('.guess').value);
    console.log(tahmin, typeof tahmin)

    if(!tahmin){
        document.querySelector('.message').textContent = '⛔ Sayı değil.'
    }
    
    else if(tahmin === gizliSayi){
        document.querySelector('.message').textContent = '👍 Doğru sayı.'
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = gizliSayi;
        highscore=temp;
        document.querySelector('.highscore').textContent = highscore;
    }
    
    else{
        if (skor > 1 ){
            skor--;
            temp = skor;
            document.querySelector('.message').textContent = '❌ Yanlış sayı.'
            document.querySelector('.score').textContent = skor;

        }
        else{
            document.querySelector('.message').textContent = '😢 Oyunu kaybettin.'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = gizliSayi;

        }
    }
});

    document.querySelector('.again').addEventListener('click',function(){
        skor=20;
        gizliSayi = Math.trunc(Math.random()*20)+1
        document.querySelector('.message').textContent = '🙄 Tahmine başla...'
        document.querySelector('.score').textContent = '20';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
    });


