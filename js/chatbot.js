(function(){
  'use strict';
  if(document.getElementById('wvChatbot')) return;

  const root=document.createElement('div');
  root.id='wvChatbot'; root.className='wv-chatbot-root';
  root.innerHTML=`
    <div class="wv-chatbot-panel" role="dialog" aria-label="Wordventure AI Assistant">
      <div class="wv-chatbot-header">
        <div class="wv-chatbot-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 10h10M7 14h6"/><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5c-1.2 0-2.35-.27-3.37-.76L4 19.5l1.22-3.46A7.42 7.42 0 0 1 4.5 12 7.5 7.5 0 1 1 20 11.5Z"/></svg></div>
        <div><div class="wv-chatbot-title">Wordventure AI</div><div class="wv-chatbot-status">● Learning assistant</div></div>
        <div class="wv-chatbot-header-actions"><button class="wv-chatbot-icon-btn" data-action="clear" aria-label="Clear chat" title="Clear chat"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 10v7M14 10v7"/></svg></button><button class="wv-chatbot-icon-btn" data-action="close" aria-label="Close"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
      </div>
      <div class="wv-chatbot-messages" aria-live="polite"></div>
      <div class="wv-chatbot-suggestions">
        <button class="wv-chat-suggestion">Explain this simply</button>
        <button class="wv-chat-suggestion">Check my grammar</button>
        <button class="wv-chat-suggestion">Give me an example</button>
        <button class="wv-chat-suggestion">Quiz me</button>
      </div>
      <div class="wv-chatbot-input-wrap"><div class="wv-chatbot-input"><textarea rows="1" placeholder="Ask your English assistant..."></textarea><button class="wv-chatbot-send" disabled aria-label="Send"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 12 16-8-5 16-3-7-8-1Z"/><path d="M12 13 20 4"/></svg></button></div><div class="wv-chatbot-hint">Frontend demo. Responses are simulated for the showcase.</div></div>
    </div>
    <button class="wv-chatbot-trigger" aria-label="Open Wordventure AI" title="Ask Wordventure AI"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 10h10M7 14h6"/><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5c-1.2 0-2.35-.27-3.37-.76L4 19.5l1.22-3.46A7.42 7.42 0 0 1 4.5 12 7.5 7.5 0 1 1 20 11.5Z"/></svg></button>`;
  document.body.appendChild(root);

  const messages=root.querySelector('.wv-chatbot-messages'), input=root.querySelector('textarea'), send=root.querySelector('.wv-chatbot-send');
  const key='wordventure_chat_history_v1';
  const context=(()=>{const p=location.pathname.toLowerCase(); if(p.includes('lesson')) return 'lesson'; if(p.includes('practice')) return 'practice'; if(p.includes('course-test')) return 'test'; if(p.includes('courses')) return 'courses'; if(p.includes('learning')) return 'learning'; return 'home';})();
  const contextLabel={lesson:'your current lesson',practice:'your practice session',test:'your course test',courses:'your course selection',learning:'your learning dashboard',home:'Wordventure'}[context];

  function addMessage(text,who='bot',save=true){const row=document.createElement('div');row.className='wv-chat-msg '+who;const bubble=document.createElement('div');bubble.className='wv-chat-bubble';bubble.textContent=text;row.appendChild(bubble);messages.appendChild(row);messages.scrollTop=messages.scrollHeight;if(save) saveHistory();}
  function saveHistory(){localStorage.setItem(key,JSON.stringify([...messages.querySelectorAll('.wv-chat-msg')].map(x=>({who:x.classList.contains('user')?'user':'bot',text:x.querySelector('.wv-chat-bubble').textContent}))));}
  function loadHistory(){try{const h=JSON.parse(localStorage.getItem(key)||'[]');if(h.length){h.forEach(m=>addMessage(m.text,m.who,false));return true}}catch(e){}return false}
  function clearChat(){localStorage.removeItem(key);messages.innerHTML='';welcome();}
  function welcome(){addMessage(`Hi! I'm Wordventure AI. I can help you practice English while you're on ${contextLabel}. Try asking me about grammar, vocabulary, or a sentence you want to improve.`);}
  function typing(){const row=document.createElement('div');row.className='wv-chat-msg bot';row.id='wvTyping';row.innerHTML='<div class="wv-chat-bubble"><div class="wv-chat-typing"><span></span><span></span><span></span></div></div>';messages.appendChild(row);messages.scrollTop=messages.scrollHeight;return row}
  function reply(text){const q=text.toLowerCase();let r;
    if(q.includes('grammar')||q.includes('correct')||q.includes('sentence')) r='Sure. Send me your sentence and I’ll point out the mistake, explain why it is wrong, and show a corrected version.';
    else if(q.includes('present perfect')) r='Present perfect connects a past action to the present. Use have or has + past participle. Example: “She has finished her homework.” Use has with he, she, and it.';
    else if(q.includes('past tense')||q.includes('simple past')) r='Simple past describes a completed action in the past. Example: “I visited Bandung yesterday.” Regular verbs usually take -ed, while irregular verbs change form, such as go → went.';
    else if(q.includes('vocabulary')||q.includes('word')) r='Give me an English word you want to learn. I can explain its meaning, pronunciation, common collocations, and give you example sentences.';
    else if(q.includes('translate')||q.includes('arti')) r='Send me the sentence you want to translate. I can give you the Indonesian meaning and explain the important vocabulary.';
    else if(q.includes('quiz')||q.includes('test')) r='Quick quiz: Choose the correct sentence. A) She have finished her work. B) She has finished her work. The answer is B because “she” uses “has”.';
    else if(q.includes('example')||q.includes('contoh')) r='Here is a simple example: “I have lived here for two years.” This means the action started in the past and is still true now.';
    else if(q.includes('hello')||q.includes('hi')||q.includes('halo')) r='Hey! Ready to practice some English? Tell me what you want to learn today.';
    else r='I can help with English grammar, vocabulary, translation, sentence correction, examples, and practice questions. Try asking something like “Explain present perfect simply.”';
    const t=typing();setTimeout(()=>{t.remove();addMessage(r);},650+Math.random()*500);
  }
  function submit(){const text=input.value.trim();if(!text)return;addMessage(text,'user');input.value='';input.style.height='auto';send.disabled=true;reply(text)}
  root.querySelector('.wv-chatbot-trigger').onclick=()=>{root.classList.toggle('open');if(root.classList.contains('open')) setTimeout(()=>input.focus(),150)};
  root.querySelector('[data-action="close"]').onclick=()=>root.classList.remove('open');
  root.querySelector('[data-action="clear"]').onclick=clearChat;
  root.querySelectorAll('.wv-chat-suggestion').forEach(b=>b.onclick=()=>{input.value=b.textContent;send.disabled=false;submit()});
  send.onclick=submit;
  input.addEventListener('input',()=>{input.style.height='auto';input.style.height=Math.min(input.scrollHeight,90)+'px';send.disabled=!input.value.trim()});
  input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();submit()}});
  if(!loadHistory()) welcome();
})();
