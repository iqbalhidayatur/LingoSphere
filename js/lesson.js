(function () {
  'use strict';

  const COURSE_DATA = {"Everyday Conversations":[{"title":"Meeting Someone","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Everyday Conversations","description":"Introductions and first impressions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Nice to meet you.","prompt":"Choose the best response.","answers":["Nice to meet you too.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand meeting someone in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["introduce yourself","a useful English word related to introduce yourself"],["conversation","a useful English word related to conversation"],["friendly","a useful English word related to friendly"],["nickname","a useful English word related to nickname"]],"phrases":[["Nice to meet you.","Nice to meet you too."],["What should I call you?","You can call me Alex."],["Where are you from?","I am from Bandung."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Daily Routines","type":"Vocabulary","icon":"bi-book-fill","context":"Everyday Conversations","description":"Talk about your normal day. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What do you usually do in the morning?","prompt":"Choose the best response.","answers":["I usually have breakfast and check my messages.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand daily routines in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["routine","a useful English word related to routine"],["usually","a useful English word related to usually"],["before","a useful English word related to before"],["after","a useful English word related to after"]],"phrases":[["What do you usually do in the morning?","I usually have breakfast and check my messages."],["What time do you start work?","I start at eight."],["What do you do after class?","I usually go home."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Making Plans","type":"Practice","icon":"bi-lightning-charge-fill","context":"Everyday Conversations","description":"Talk about future plans. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Are you free tonight?","prompt":"Choose the best response.","answers":["Yes, I am available after seven.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand making plans in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["plan","a useful English word related to plan"],["available","a useful English word related to available"],["appointment","a useful English word related to appointment"],["schedule","a useful English word related to schedule"]],"phrases":[["Are you free tonight?","Yes, I am available after seven."],["What are you doing this weekend?","I am meeting some friends."],["Can we meet tomorrow?","Sure, what time?"]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Shopping Basics","type":"Review","icon":"bi-check-circle-fill","context":"Everyday Conversations","description":"Ask about products and prices. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How much is this?","prompt":"Choose the best response.","answers":["It is twenty dollars.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand shopping basics in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["price","a useful English word related to price"],["size","a useful English word related to size"],["cashier","a useful English word related to cashier"],["receipt","a useful English word related to receipt"]],"phrases":[["How much is this?","It is twenty dollars."],["Do you have a larger size?","Yes, let me check."],["Could I get a receipt?","Of course."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"At a Cafe","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Everyday Conversations","description":"Order drinks and snacks. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What would you like?","prompt":"Choose the best response.","answers":["I would like a latte, please.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand at a cafe in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["menu","a useful English word related to menu"],["order","a useful English word related to order"],["decaf","a useful English word related to decaf"],["bill","a useful English word related to bill"]],"phrases":[["What would you like?","I would like a latte, please."],["Can I get this to go?","Sure."],["Could I have the bill?","Here you are."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Asking for Help","type":"Vocabulary","icon":"bi-book-fill","context":"Everyday Conversations","description":"Ask for help politely. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Could you help me?","prompt":"Choose the best response.","answers":["Sure. What do you need?","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand asking for help in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["helpful","a useful English word related to helpful"],["problem","a useful English word related to problem"],["explain","a useful English word related to explain"],["available","a useful English word related to available"]],"phrases":[["Could you help me?","Sure. What do you need?"],["Can you explain this?","Of course."],["Do you have a minute?","Yes, I am available now."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Talking About Hobbies","type":"Practice","icon":"bi-lightning-charge-fill","context":"Everyday Conversations","description":"Discuss free-time interests. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What do you do for fun?","prompt":"Choose the best response.","answers":["I enjoy playing games.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand talking about hobbies in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["hobby","a useful English word related to hobby"],["practice","a useful English word related to practice"],["enjoy","a useful English word related to enjoy"],["weekend","a useful English word related to weekend"]],"phrases":[["What do you do for fun?","I enjoy playing games."],["Do you play any sports?","Yes, I play badminton."],["How often do you practice?","Twice a week."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Making Invitations","type":"Review","icon":"bi-check-circle-fill","context":"Everyday Conversations","description":"Invite someone and respond. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Would you like to join us?","prompt":"Choose the best response.","answers":["Sure, I would love to.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand making invitations in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["invite","a useful English word related to invite"],["join","a useful English word related to join"],["maybe","a useful English word related to maybe"],["accept","a useful English word related to accept"]],"phrases":[["Would you like to join us?","Sure, I would love to."],["Do you want to come with us?","Maybe. What time?"],["Are you free for dinner?","Yes, thanks for inviting me."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Small Talk","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Everyday Conversations","description":"Keep a simple conversation going. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How is your day going?","prompt":"Choose the best response.","answers":["Pretty good, thanks.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand small talk in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["weather","a useful English word related to weather"],["traffic","a useful English word related to traffic"],["interesting","a useful English word related to interesting"],["recently","a useful English word related to recently"]],"phrases":[["How is your day going?","Pretty good, thanks."],["Did you have a busy morning?","Yes, it was quite busy."],["What have you been doing recently?","I have been studying English."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Ending a Conversation","type":"Vocabulary","icon":"bi-book-fill","context":"Everyday Conversations","description":"Close conversations naturally. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"I should get going.","prompt":"Choose the best response.","answers":["Sure. Talk to you later.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand ending a conversation in context","Use key everyday conversations vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["leave","a useful English word related to leave"],["catch","a useful English word related to catch"],["later","a useful English word related to later"],["talk","a useful English word related to talk"]],"phrases":[["I should get going.","Sure. Talk to you later."],["I have to leave now.","No problem. See you soon."],["It was nice talking to you.","Nice talking to you too."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."}],"Vocabulary Builder":[{"title":"People and Relationships","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Vocabulary Builder","description":"Words for people and relationships. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"She is my colleague.","prompt":"Choose the best response.","answers":["She works with me.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand people and relationships in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["neighbor","a useful English word related to neighbor"],["colleague","a useful English word related to colleague"],["relative","a useful English word related to relative"],["partner","a useful English word related to partner"]],"phrases":[["She is my colleague.","She works with me."],["Is he your neighbor?","Yes, he lives next door."],["Do you have any relatives here?","Yes, my cousin lives nearby."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Home and Rooms","type":"Vocabulary","icon":"bi-book-fill","context":"Vocabulary Builder","description":"Common home vocabulary. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"The kitchen is upstairs.","prompt":"Choose the best response.","answers":["Okay, thanks.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand home and rooms in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["kitchen","a useful English word related to kitchen"],["bedroom","a useful English word related to bedroom"],["balcony","a useful English word related to balcony"],["stairs","a useful English word related to stairs"]],"phrases":[["The kitchen is upstairs.","Okay, thanks."],["Where is the bedroom?","It is next to the bathroom."],["Do you have a balcony?","Yes, it faces the street."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Food and Drinks","type":"Practice","icon":"bi-lightning-charge-fill","context":"Vocabulary Builder","description":"Everyday food vocabulary. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What is in this dish?","prompt":"Choose the best response.","answers":["The main ingredient is chicken.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand food and drinks in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["ingredient","a useful English word related to ingredient"],["snack","a useful English word related to snack"],["beverage","a useful English word related to beverage"],["portion","a useful English word related to portion"]],"phrases":[["What is in this dish?","The main ingredient is chicken."],["Would you like a snack?","Yes, please."],["What beverage would you like?","Water, please."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Work and Study","type":"Review","icon":"bi-check-circle-fill","context":"Vocabulary Builder","description":"Useful school and work words. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"When is the deadline?","prompt":"Choose the best response.","answers":["It is Friday.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand work and study in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["deadline","a useful English word related to deadline"],["assignment","a useful English word related to assignment"],["meeting","a useful English word related to meeting"],["project","a useful English word related to project"]],"phrases":[["When is the deadline?","It is Friday."],["Did you finish the assignment?","Almost."],["What is the meeting about?","It is about our project."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Time and Frequency","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Vocabulary Builder","description":"Words for time and frequency. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How often do you exercise?","prompt":"Choose the best response.","answers":["I exercise daily.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand time and frequency in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["daily","a useful English word related to daily"],["weekly","a useful English word related to weekly"],["rarely","a useful English word related to rarely"],["often","a useful English word related to often"]],"phrases":[["How often do you exercise?","I exercise daily."],["Do you often cook?","Yes, quite often."],["How often do you travel?","I rarely travel for work."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Movement and Position","type":"Vocabulary","icon":"bi-book-fill","context":"Vocabulary Builder","description":"Words for location and movement. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Where is the bank?","prompt":"Choose the best response.","answers":["It is across the street.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand movement and position in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["across","a useful English word related to across"],["between","a useful English word related to between"],["behind","a useful English word related to behind"],["toward","a useful English word related to toward"]],"phrases":[["Where is the bank?","It is across the street."],["Where is the cafe?","It is between the bank and the library."],["Which way are you going?","I am walking toward the station."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Feelings and Emotions","type":"Practice","icon":"bi-lightning-charge-fill","context":"Vocabulary Builder","description":"Vocabulary for common feelings. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How do you feel?","prompt":"Choose the best response.","answers":["I feel excited.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand feelings and emotions in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["excited","a useful English word related to excited"],["nervous","a useful English word related to nervous"],["relaxed","a useful English word related to relaxed"],["disappointed","a useful English word related to disappointed"]],"phrases":[["How do you feel?","I feel excited."],["Are you nervous?","A little."],["Why are you disappointed?","The event was cancelled."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Describing Things","type":"Review","icon":"bi-check-circle-fill","context":"Vocabulary Builder","description":"Adjectives for objects and places. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How is the new chair?","prompt":"Choose the best response.","answers":["It is comfortable.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand describing things in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["useful","a useful English word related to useful"],["comfortable","a useful English word related to comfortable"],["crowded","a useful English word related to crowded"],["quiet","a useful English word related to quiet"]],"phrases":[["How is the new chair?","It is comfortable."],["Is the market crowded?","Yes, very crowded."],["Is this app useful?","Yes, it is very useful."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Common Action Verbs","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Vocabulary Builder","description":"High-frequency action words. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Can I borrow your pen?","prompt":"Choose the best response.","answers":["Sure.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand common action verbs in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["borrow","a useful English word related to borrow"],["choose","a useful English word related to choose"],["improve","a useful English word related to improve"],["prepare","a useful English word related to prepare"]],"phrases":[["Can I borrow your pen?","Sure."],["Which one should I choose?","Choose the smaller one."],["How can I improve?","Practice every day."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Communication Words","type":"Vocabulary","icon":"bi-book-fill","context":"Vocabulary Builder","description":"Words used in conversations. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Did you get my message?","prompt":"Choose the best response.","answers":["Yes, I will reply soon.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand communication words in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["message","a useful English word related to message"],["reply","a useful English word related to reply"],["question","a useful English word related to question"],["answer","a useful English word related to answer"]],"phrases":[["Did you get my message?","Yes, I will reply soon."],["Do you have a question?","Yes, I have one."],["What is the answer?","The answer is B."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Travel Words","type":"Practice","icon":"bi-lightning-charge-fill","context":"Vocabulary Builder","description":"Core travel vocabulary. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What is your destination?","prompt":"Choose the best response.","answers":["Jakarta.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand travel words in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["journey","a useful English word related to journey"],["destination","a useful English word related to destination"],["luggage","a useful English word related to luggage"],["departure","a useful English word related to departure"]],"phrases":[["What is your destination?","Jakarta."],["When is the departure?","At nine."],["Do you have much luggage?","Just one bag."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Review and Recall","type":"Review","icon":"bi-check-circle-fill","context":"Vocabulary Builder","description":"Review common vocabulary. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Do you remember this word?","prompt":"Choose the best response.","answers":["Yes, I remember it.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand review and recall in context","Use key vocabulary builder vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["remember","a useful English word related to remember"],["meaning","a useful English word related to meaning"],["example","a useful English word related to example"],["context","a useful English word related to context"]],"phrases":[["Do you remember this word?","Yes, I remember it."],["What is the meaning?","It means “useful.”"],["Can you give an example?","Sure. Here is one."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."}],"Speak With Confidence":[{"title":"Starting a Conversation","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"Hi, how are you? It is nice to meet you.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["greeting","a useful English word related to greeting"],["topic","a useful English word related to topic"],["introduce","a useful English word related to introduce"],["comfortable","a useful English word related to comfortable"]],"phrases":[["Hi, how are you?","I am good, thanks."],["Can I introduce myself?","Of course."],["What should we talk about?","Let us talk about travel."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"Hi, how are you? It is nice to meet you."},{"title":"Giving Short Answers","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"I like learning English because it is useful and fun.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["complete","a useful English word related to complete"],["detail","a useful English word related to detail"],["reason","a useful English word related to reason"],["example","a useful English word related to example"]],"phrases":[["Why do you like it?","I like it because it is useful."],["What do you do?","I study computer science."],["Can you give an example?","Sure, for example, I practice daily."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"I like learning English because it is useful and fun."},{"title":"Asking Follow-up Questions","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"Could you tell me more about that? I would like to understand it better.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["follow-up","a useful English word related to follow up"],["clarify","a useful English word related to clarify"],["curious","a useful English word related to curious"],["specific","a useful English word related to specific"]],"phrases":[["What do you mean?","I mean that we need more practice."],["Can you tell me more?","Sure."],["Why is that?","Because it saves time."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"Could you tell me more about that? I would like to understand it better."},{"title":"Expressing Opinions","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"I think it is a great idea, and I would be happy to try it.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["opinion","a useful English word related to opinion"],["agree","a useful English word related to agree"],["disagree","a useful English word related to disagree"],["prefer","a useful English word related to prefer"]],"phrases":[["What do you think?","I think it is a good idea."],["Do you agree?","Yes, I agree."],["Which do you prefer?","I prefer the first option."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"I think it is a great idea, and I would be happy to try it."},{"title":"Describing Experiences","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"Last weekend, I visited my friend and we watched a movie together.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["experience","a useful English word related to experience"],["remember","a useful English word related to remember"],["recently","a useful English word related to recently"],["happen","a useful English word related to happen"]],"phrases":[["What happened?","I missed the bus."],["Have you been there before?","Yes, I have."],["What did you do recently?","I visited my friend."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"Last weekend, I visited my friend and we watched a movie together."},{"title":"Storytelling Basics","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"First, I woke up early. Then, I had breakfast and went to class.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["first","a useful English word related to first"],["then","a useful English word related to then"],["finally","a useful English word related to finally"],["suddenly","a useful English word related to suddenly"]],"phrases":[["What happened first?","First, we arrived at the station."],["What happened then?","Then we bought tickets."],["How did it end?","Finally, we got home."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"First, I woke up early. Then, I had breakfast and went to class."},{"title":"Pronunciation and Pace","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"How do I pronounce this word? Could you say it again, please?","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["pronounce","a useful English word related to pronounce"],["stress","a useful English word related to stress"],["pause","a useful English word related to pause"],["slowly","a useful English word related to slowly"]],"phrases":[["How do I pronounce this?","Say it slowly first."],["Where is the stress?","The stress is on the first syllable."],["Can you repeat that?","Sure."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"How do I pronounce this word? Could you say it again, please?"},{"title":"Handling Mistakes","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"Sorry, I made a mistake. Let me try that sentence again.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["mistake","a useful English word related to mistake"],["correct","a useful English word related to correct"],["repeat","a useful English word related to repeat"],["mean","a useful English word related to mean"]],"phrases":[["Sorry, I made a mistake.","No problem."],["What did you mean?","I meant tomorrow."],["Could you repeat that?","Sure."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"Sorry, I made a mistake. Let me try that sentence again."},{"title":"Speaking in Groups","type":"Speaking","icon":"bi-mic-fill","context":"Speaking Practice","description":"Read the English text aloud, record your voice, and check your pronunciation with speech recognition.","speaker":"Speaking coach","example":"Can I add something to the discussion? I have an idea I would like to share.","prompt":"Read the text aloud and record your voice.","answers":[],"correct":0,"objectives":["Read English sentences aloud","Practice pronunciation and speaking pace","Compare your speech with the target text"],"vocabulary":[["join","a useful English word related to join"],["point","a useful English word related to point"],["interrupt","a useful English word related to interrupt"],["turn","a useful English word related to turn"]],"phrases":[["Can I add something?","Sure, go ahead."],["What is your point?","My point is that practice helps."],["When is my turn?","You can speak next."]],"tip":"Speak clearly at a natural pace. The score uses your browser speech recognition transcript to estimate how closely your pronunciation matches the target text.","readingText":"Can I add something to the discussion? I have an idea I would like to share."}],"Grammar In Context":[{"title":"Present Simple","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Grammar In Context","description":"Use present simple for routines and facts. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"I usually study at night.","prompt":"Choose the best response.","answers":["That describes a routine.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand present simple in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["habit","a useful English word related to habit"],["routine","a useful English word related to routine"],["usually","a useful English word related to usually"],["fact","a useful English word related to fact"]],"phrases":[["I usually study at night.","That describes a routine."],["She works here.","That describes a fact."],["Do you exercise?","Yes, I do."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Present Continuous","type":"Vocabulary","icon":"bi-book-fill","context":"Grammar In Context","description":"Talk about actions happening now. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What are you doing?","prompt":"Choose the best response.","answers":["I am studying.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand present continuous in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["currently","a useful English word related to currently"],["happening","a useful English word related to happening"],["temporary","a useful English word related to temporary"],["today","a useful English word related to today"]],"phrases":[["What are you doing?","I am studying."],["Is she working today?","Yes, she is."],["Why are they running?","They are late."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Past Simple","type":"Practice","icon":"bi-lightning-charge-fill","context":"Grammar In Context","description":"Describe completed past actions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What did you do yesterday?","prompt":"Choose the best response.","answers":["I visited my friend.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand past simple in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["yesterday","a useful English word related to yesterday"],["last","a useful English word related to last"],["ago","a useful English word related to ago"],["finished","a useful English word related to finished"]],"phrases":[["What did you do yesterday?","I visited my friend."],["When did you arrive?","I arrived at six."],["Did you finish?","Yes, I did."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Future with Will","type":"Review","icon":"bi-check-circle-fill","context":"Grammar In Context","description":"Make predictions and quick decisions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Will you help me?","prompt":"Choose the best response.","answers":["Yes, I will.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand future with will in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["predict","a useful English word related to predict"],["promise","a useful English word related to promise"],["later","a useful English word related to later"],["probably","a useful English word related to probably"]],"phrases":[["Will you help me?","Yes, I will."],["What will happen?","It will probably rain."],["I am tired.","I will make some tea."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Going to","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Grammar In Context","description":"Talk about plans and intentions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What are you going to do?","prompt":"Choose the best response.","answers":["I am going to study.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand going to in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["intention","a useful English word related to intention"],["plan","a useful English word related to plan"],["tomorrow","a useful English word related to tomorrow"],["decide","a useful English word related to decide"]],"phrases":[["What are you going to do?","I am going to study."],["Are you going to travel?","Yes, next month."],["Why are you going to leave early?","I have an appointment."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Countable and Uncountable Nouns","type":"Vocabulary","icon":"bi-book-fill","context":"Grammar In Context","description":"Use nouns with correct quantity words. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How many apples do we need?","prompt":"Choose the best response.","answers":["We need three.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand countable and uncountable nouns in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["countable","a useful English word related to countable"],["uncountable","a useful English word related to uncountable"],["some","a useful English word related to some"],["much","a useful English word related to much"]],"phrases":[["How many apples do we need?","We need three."],["How much water is left?","Not much."],["Do you have any rice?","Yes, some."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Comparatives","type":"Practice","icon":"bi-lightning-charge-fill","context":"Grammar In Context","description":"Compare two things. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Which is cheaper?","prompt":"Choose the best response.","answers":["The bus is cheaper than the taxi.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand comparatives in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["cheaper","a useful English word related to cheaper"],["faster","a useful English word related to faster"],["better","a useful English word related to better"],["than","a useful English word related to than"]],"phrases":[["Which is cheaper?","The bus is cheaper than the taxi."],["Which is faster?","The train is faster."],["Is this one better?","Yes, it is better."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Modal Verbs","type":"Review","icon":"bi-check-circle-fill","context":"Grammar In Context","description":"Use can, should, and must. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Can I sit here?","prompt":"Choose the best response.","answers":["Yes, you can.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand modal verbs in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["ability","a useful English word related to ability"],["advice","a useful English word related to advice"],["rule","a useful English word related to rule"],["permission","a useful English word related to permission"]],"phrases":[["Can I sit here?","Yes, you can."],["What should I do?","You should practice."],["Must I pay now?","Yes, you must."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Questions","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Grammar In Context","description":"Build clear information questions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Where do you live?","prompt":"Choose the best response.","answers":["I live in Bandung.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand questions in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["who","a useful English word related to who"],["where","a useful English word related to where"],["when","a useful English word related to when"],["why","a useful English word related to why"]],"phrases":[["Where do you live?","I live in Bandung."],["Why are you late?","Because of traffic."],["When does it start?","At nine."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Prepositions","type":"Vocabulary","icon":"bi-book-fill","context":"Grammar In Context","description":"Use common place and time prepositions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Where is the book?","prompt":"Choose the best response.","answers":["It is on the table.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand prepositions in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["in","a useful English word related to in"],["on","a useful English word related to on"],["at","a useful English word related to at"],["between","a useful English word related to between"]],"phrases":[["Where is the book?","It is on the table."],["When is the meeting?","At three."],["Where is the cafe?","Between the bank and the station."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Articles","type":"Practice","icon":"bi-lightning-charge-fill","context":"Grammar In Context","description":"Use a, an, and the. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"I need a pen.","prompt":"Choose the best response.","answers":["Any pen is okay.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand articles in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["article","a useful English word related to article"],["specific","a useful English word related to specific"],["general","a useful English word related to general"],["vowel","a useful English word related to vowel"]],"phrases":[["I need a pen.","Any pen is okay."],["I saw an old building.","It was interesting."],["The building was beautiful.","We mean a specific building."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Adverbs","type":"Review","icon":"bi-check-circle-fill","context":"Grammar In Context","description":"Describe how and how often actions happen. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How does she work?","prompt":"Choose the best response.","answers":["She works carefully.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand adverbs in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["quickly","a useful English word related to quickly"],["carefully","a useful English word related to carefully"],["often","a useful English word related to often"],["never","a useful English word related to never"]],"phrases":[["How does she work?","She works carefully."],["How often do you read?","I often read."],["Do you ever skip practice?","I never skip it."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Connectors","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Grammar In Context","description":"Join ideas with simple connectors. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Why did you stay home?","prompt":"Choose the best response.","answers":["Because I was tired.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand connectors in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["because","a useful English word related to because"],["but","a useful English word related to but"],["so","a useful English word related to so"],["although","a useful English word related to although"]],"phrases":[["Why did you stay home?","Because I was tired."],["Was it difficult?","It was difficult, but useful."],["It was raining, so we stayed inside.","That shows a result."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Grammar Review","type":"Vocabulary","icon":"bi-book-fill","context":"Grammar In Context","description":"Review the main grammar patterns. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What is the subject?","prompt":"Choose the best response.","answers":["The subject is “she.”","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand grammar review in context","Use key grammar in context vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["tense","a useful English word related to tense"],["subject","a useful English word related to subject"],["verb","a useful English word related to verb"],["sentence","a useful English word related to sentence"]],"phrases":[["What is the subject?","The subject is “she.”"],["Which tense is this?","It is past simple."],["Is the sentence correct?","Yes, it is."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."}],"Listening Lab":[{"title":"Everyday Greetings","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Listening Lab","description":"Recognize common greetings. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"“Good morning.”","prompt":"Choose the best response.","answers":["A greeting used in the morning.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand everyday greetings in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["hello","a useful English word related to hello"],["morning","a useful English word related to morning"],["welcome","a useful English word related to welcome"],["goodbye","a useful English word related to goodbye"]],"phrases":[["“Good morning.”","A greeting used in the morning."],["“Nice to meet you.”","A friendly introduction."],["“See you later.”","A casual goodbye."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Numbers and Times","type":"Vocabulary","icon":"bi-book-fill","context":"Listening Lab","description":"Catch numbers and times in speech. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What time is it?","prompt":"Choose the best response.","answers":["It is half past three.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand numbers and times in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["number","a useful English word related to number"],["quarter","a useful English word related to quarter"],["half","a useful English word related to half"],["o’clock","a useful English word related to o’clock"]],"phrases":[["What time is it?","It is half past three."],["What time is the meeting?","At quarter past nine."],["How many?","Twenty people."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Directions","type":"Practice","icon":"bi-lightning-charge-fill","context":"Listening Lab","description":"Understand simple spoken directions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Where is the bank?","prompt":"Choose the best response.","answers":["Go straight and turn left.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand directions in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["turn","a useful English word related to turn"],["straight","a useful English word related to straight"],["corner","a useful English word related to corner"],["across","a useful English word related to across"]],"phrases":[["Where is the bank?","Go straight and turn left."],["Where is the cafe?","It is across the street."],["Where should I turn?","At the corner."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Shopping Conversations","type":"Review","icon":"bi-check-circle-fill","context":"Listening Lab","description":"Understand price and size questions. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"How much is it?","prompt":"Choose the best response.","answers":["It is fifteen dollars.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand shopping conversations in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["price","a useful English word related to price"],["discount","a useful English word related to discount"],["size","a useful English word related to size"],["cash","a useful English word related to cash"]],"phrases":[["How much is it?","It is fifteen dollars."],["Do you have a larger size?","Yes."],["Is there a discount?","Yes, ten percent."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Food Orders","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Listening Lab","description":"Understand restaurant requests. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"What would you like?","prompt":"Choose the best response.","answers":["The chicken, please.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand food orders in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["order","a useful English word related to order"],["special","a useful English word related to special"],["allergy","a useful English word related to allergy"],["spicy","a useful English word related to spicy"]],"phrases":[["What would you like?","The chicken, please."],["Is it spicy?","A little."],["Do you have any allergies?","No, I do not."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Transport Announcements","type":"Vocabulary","icon":"bi-book-fill","context":"Listening Lab","description":"Understand public transport information. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"Which platform?","prompt":"Choose the best response.","answers":["Platform four.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand transport announcements in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["platform","a useful English word related to platform"],["departure","a useful English word related to departure"],["arrival","a useful English word related to arrival"],["delay","a useful English word related to delay"]],"phrases":[["Which platform?","Platform four."],["When is the departure?","At ten twenty."],["Is there a delay?","Yes, ten minutes."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."},{"title":"Workplace Listening","type":"Practice","icon":"bi-lightning-charge-fill","context":"Listening Lab","description":"Catch key information at work. Learn the key words, useful phrases, and how to use them in a real conversation.","speaker":"English coach","example":"When is the deadline?","prompt":"Choose the best response.","answers":["Friday afternoon.","I do not understand the topic.","The weather is blue.","I am a passport."],"correct":0,"objectives":["Understand workplace listening in context","Use key listening lab vocabulary","Answer simple questions with complete sentences"],"vocabulary":[["deadline","a useful English word related to deadline"],["meeting","a useful English word related to meeting"],["task","a useful English word related to task"],["update","a useful English word related to update"]],"phrases":[["When is the deadline?","Friday afternoon."],["What is the meeting about?","The new project."],["Any updates?","Yes, I finished the first task."]],"tip":"Focus on the meaning of each word and say the example sentence aloud. Try to reuse it in a new sentence."}],"Travel English":[{"title":"Airport Check-in","type":"Conversation","icon":"bi-chat-square-text-fill","context":"Travel English","description":"Learn the phrases you need to check in, confirm your baggage, and ask about your gate.","speaker":"Airport agent","example":"Good morning. May I see your passport?","prompt":"Choose the best response.","answers":["Sure. Here you are.","No, I do not travel.","Where is the hotel?","I am studying English."],"correct":0,"objectives":["Ask for and show travel documents","Use polite check-in phrases","Talk about your flight and seat"],"vocabulary":[["passport","a document used to identify you when you travel"],["boarding pass","a document that lets you board a flight"],["check in","to register for your flight"],["seat","the place where you sit on the plane"]],"phrases":[["May I see your passport?","Sure. Here you are."],["Do you have a reservation?","Yes, I booked a flight to London."],["Could I have a window seat?","Of course."]],"tip":"Use “May I…?” and “Could I…?” for polite requests."},{"title":"Baggage Questions","type":"Vocabulary","icon":"bi-luggage-fill","context":"Travel English","description":"Practice useful words for checked bags, carry-ons, weight, and baggage limits.","speaker":"Airport agent","example":"Do you have any bags to check?","prompt":"Choose the best response.","answers":["Yes, I have one suitcase.","It is very delicious.","My gate is number twelve.","I booked a room."],"correct":0,"objectives":["Identify common baggage vocabulary","Answer questions about your bags","Ask about baggage limits"],"vocabulary":[["suitcase","a large bag used for clothes and personal items"],["carry-on","a small bag you take onto the plane"],["checked bag","a bag you give to the airline before the flight"],["weight limit","the maximum weight allowed"]],"phrases":[["Do you have any bags to check?","Yes, I have one suitcase."],["Is this bag a carry-on?","Yes, it is."],["What is the weight limit?","The limit is 23 kilograms."]],"tip":"“How many?” asks about a number. “How much?” asks about an amount."},{"title":"Finding Your Gate","type":"Conversation","icon":"bi-signpost-2-fill","context":"Travel English","description":"Ask for directions and understand common airport signs.","speaker":"Traveler","example":"Excuse me, where is gate B14?","prompt":"Choose the best response.","answers":["It is down the hall on your left.","I would like a coffee.","My passport is blue.","The flight leaves tomorrow."],"correct":0,"objectives":["Ask where a place is","Understand left, right, and straight ahead","Follow simple airport directions"],"vocabulary":[["gate","the area where passengers board a flight"],["hall","a passage inside a building"],["left","the side opposite your right"],["straight ahead","directly in front of you"]],"phrases":[["Where is gate B14?","It is down the hall on your left."],["How do I get to security?","Go straight ahead and turn right."],["Is it far?","No, it is nearby."]],"tip":"“Excuse me” is a natural way to start a question with a stranger."},{"title":"At the Boarding Gate","type":"Listening","icon":"bi-headphones","context":"Travel English","description":"Recognize common announcements and respond to simple boarding instructions.","speaker":"Gate agent","example":"Passengers in group three may now board.","prompt":"What does the announcement mean?","answers":["Group three can enter the plane now.","Group three should check their hotel.","The airport is closing.","The flight has been cancelled."],"correct":0,"objectives":["Understand basic boarding announcements","Recognize group and gate information","Identify common flight status phrases"],"vocabulary":[["board","to enter an aircraft before a flight"],["passenger","a person travelling in a vehicle"],["announcement","a spoken message given to many people"],["cancelled","stopped and no longer happening"]],"phrases":[["Passengers in group three may now board.","Group three can enter the plane now."],["The flight is delayed.","The flight will leave later than planned."],["The gate has changed.","Please go to the new gate."]],"tip":"Listen for keywords such as “board”, “delayed”, “cancelled”, and “gate”."},{"title":"Hotel Check-in","type":"Conversation","icon":"bi-building-fill","context":"Travel English","description":"Check into a hotel, confirm your reservation, and ask simple questions.","speaker":"Receptionist","example":"Do you have a reservation?","prompt":"Choose the best response.","answers":["Yes, I booked a room for two nights.","I need to catch a flight.","My suitcase is heavy.","Where is gate B14?"],"correct":0,"objectives":["Confirm a hotel reservation","Ask about your room","Request basic hotel information"],"vocabulary":[["reservation","an arrangement to keep a room for you"],["reception","the front desk of a hotel"],["room key","a key or card used to enter your room"],["checkout","the process of leaving the hotel"]],"phrases":[["Do you have a reservation?","Yes, I booked a room for two nights."],["What time is checkout?","Checkout is at 11 a.m."],["Could I have the Wi-Fi password?","Sure. It is on your key card."]],"tip":"“I booked…” is a simple way to explain that you already made a reservation."},{"title":"Ordering Breakfast","type":"Speaking","icon":"bi-cup-hot-fill","context":"Travel English","description":"Order food and drinks politely while staying clear and confident.","speaker":"Server","example":"What would you like for breakfast?","prompt":"Choose the best response.","answers":["I would like eggs and orange juice, please.","My room is on the third floor.","Here is my passport.","Where is the taxi?"],"correct":0,"objectives":["Order food and drinks","Use polite requests","Ask about menu items"],"vocabulary":[["menu","a list of food and drinks available"],["order","to ask for food or a drink"],["bill","the amount you need to pay"],["still or sparkling","types of bottled water"]],"phrases":[["What would you like?","I would like eggs and orange juice, please."],["Could I have some coffee?","Sure."],["Could we have the bill, please?","Of course."]],"tip":"“I would like…” sounds polite and natural when ordering."},{"title":"Getting Around Town","type":"Vocabulary","icon":"bi-map-fill","context":"Travel English","description":"Use practical phrases for taxis, public transport, and asking for directions.","speaker":"Traveler","example":"How can I get to the city center?","prompt":"Choose the best response.","answers":["You can take the metro from here.","I would like a single room.","My flight boards at six.","I have two suitcases."],"correct":0,"objectives":["Ask how to reach a destination","Talk about public transport","Understand simple route instructions"],"vocabulary":[["metro","an underground or city train system"],["station","a place where trains or buses stop"],["fare","the price of a journey"],["taxi","a car that takes passengers for payment"]],"phrases":[["How can I get to the city center?","You can take the metro from here."],["How much is the fare?","It is five dollars."],["Could you take me to this address?","Sure."]],"tip":"Use “How can I get to…?” when you need directions to a destination."},{"title":"Travel Wrap-up","type":"Review","icon":"bi-trophy-fill","context":"Travel English","description":"Review the core phrases from this course before taking the final test.","speaker":"Coach","example":"You are ready for your trip. What will you say at check-in?","prompt":"Choose the strongest response.","answers":["Hello. I have a reservation under Morgan.","The weather is beautiful.","I like grammar exercises.","My favorite color is blue."],"correct":0,"objectives":["Review airport and hotel phrases","Review food and transport vocabulary","Prepare for the final course test"],"vocabulary":[["reservation","an arrangement made in advance"],["gate","the place where you board a flight"],["carry-on","a small bag taken onto the plane"],["fare","the price of a transport journey"]],"phrases":[["I have a reservation under…","Hello. I have a reservation under Morgan."],["Where is gate B14?","It is down the hall on your left."],["How can I get to the city center?","You can take the metro from here."]],"tip":"Try to answer using a complete sentence. The final test checks how well you can use these phrases in context."}]};

  COURSE_DATA["Writing Practice"] = [
    {
      title:"Simple Introductions", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a short Indonesian introduction into natural English using simple present tense.",
      speaker:"Writing prompt", example:"Saya tinggal di Bandung dan saya belajar bahasa Inggris.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Translate simple Indonesian sentences","Use simple present tense correctly","Write complete English sentences"],
      vocabulary:[["live","tinggal"],["study","belajar"],["English","bahasa Inggris"],["city","kota"]],
      phrases:[["Saya tinggal di Bandung.","I live in Bandung."],["Saya belajar bahasa Inggris.","I study English."]],
      tip:"Use the simple present for facts and routines. Keep the sentence natural, not word-for-word."
    },
    {
      title:"Daily Routine", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate an everyday routine sentence into clear English.",
      speaker:"Writing prompt", example:"Saya biasanya bangun jam enam pagi.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Use adverbs of frequency","Write natural daily routine sentences","Keep English word order correct"],
      vocabulary:[["usually","biasanya"],["wake up","bangun"],["morning","pagi"],["early","lebih awal"]],
      phrases:[["Saya biasanya bangun jam enam pagi.","I usually wake up at six in the morning."]],
      tip:"Place usually before the main verb. Example: I usually wake up early."
    },
    {
      title:"Past Activities", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a sentence about a completed activity in the past.",
      speaker:"Writing prompt", example:"Kemarin saya pergi ke perpustakaan bersama teman saya.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Use simple past tense","Describe completed activities","Use time expressions naturally"],
      vocabulary:[["yesterday","kemarin"],["went","pergi"],["library","perpustakaan"],["friend","teman"]],
      phrases:[["Kemarin saya pergi ke perpustakaan.","Yesterday, I went to the library."]],
      tip:"Use the past form of the verb for completed actions. Go becomes went."
    },
    {
      title:"Making Plans", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a sentence about a future plan using natural English.",
      speaker:"Writing prompt", example:"Saya akan bertemu teman saya besok sore.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Talk about future plans","Use will or be going to naturally","Write complete sentences"],
      vocabulary:[["tomorrow","besok"],["afternoon","sore"],["meet","bertemu"],["plan","rencana"]],
      phrases:[["Saya akan bertemu teman saya besok sore.","I am going to meet my friend tomorrow afternoon."]],
      tip:"Use be going to for a planned future action."
    },
    {
      title:"Giving Directions", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a practical direction sentence for a real-world situation.",
      speaker:"Writing prompt", example:"Stasiun ada di sebelah bank.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Describe locations","Use prepositions correctly","Write practical English sentences"],
      vocabulary:[["station","stasiun"],["next to","di sebelah"],["bank","bank"],["location","lokasi"]],
      phrases:[["Stasiun ada di sebelah bank.","The station is next to the bank."]],
      tip:"Use is next to when describing the location of one place beside another."
    },
    {
      title:"Ordering Food", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a polite restaurant request into natural English.",
      speaker:"Writing prompt", example:"Saya ingin memesan nasi goreng dan teh, tolong.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Make polite requests","Use would like naturally","Write restaurant phrases"],
      vocabulary:[["order","memesan"],["fried rice","nasi goreng"],["tea","teh"],["please","tolong/silakan"]],
      phrases:[["Saya ingin memesan nasi goreng dan teh, tolong.","I would like to order fried rice and tea, please."]],
      tip:"I would like to... is a polite pattern for ordering or requesting something."
    },
    {
      title:"Describing People", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a sentence that describes a person's personality.",
      speaker:"Writing prompt", example:"Kakak saya sangat ramah dan suka membantu orang lain.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Describe personality","Connect ideas with and","Use adjectives correctly"],
      vocabulary:[["friendly","ramah"],["helpful","suka membantu"],["personality","kepribadian"],["brother","kakak/adik laki-laki"]],
      phrases:[["Kakak saya sangat ramah.","My brother is very friendly."]],
      tip:"Use be + adjective to describe people. Example: She is friendly."
    },
    {
      title:"Weekend Plans", type:"Writing", icon:"bi-pencil-square", context:"Writing Practice",
      description:"Translate a short plan for the weekend using natural sentence structure.",
      speaker:"Writing prompt", example:"Akhir pekan ini saya ingin belajar dan menonton film.",
      prompt:"Terjemahkan kalimat di atas ke bahasa Inggris.",
      answers:[], correct:0,
      objectives:["Express intentions","Use want to correctly","Connect two activities"],
      vocabulary:[["weekend","akhir pekan"],["want to","ingin"],["study","belajar"],["movie","film"]],
      phrases:[["Akhir pekan ini saya ingin belajar dan menonton film.","This weekend, I want to study and watch a movie."]],
      tip:"After want to, use the base form of the verb."
    }
  ];

  const params = new URLSearchParams(window.location.search);
  const requestedCourse = params.get('course') || 'Travel English';
  const state = {
    course: COURSE_DATA[requestedCourse] ? requestedCourse : 'Travel English',
    current: Math.max(0, (Number(params.get('lesson')) || 1) - 1),
    selected: null,
    checked: false,
    completed: readCourseArray('completedLessons'),
    bookmarks: readCourseArray('bookmarkedLessons')
  };

  const speakingState = {
    recorder: null,
    stream: null,
    recognition: null,
    timer: null,
    seconds: 0,
    transcript: '',
    blobUrl: '',
    score: null,
    recording: false,
    supported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    sessionId: 0
  };

  const $ = id => document.getElementById(id);
  const lessons = () => COURSE_DATA[state.course];
  const key = name => `lingosphere.${name}.${state.course}`;

  function readCourseArray(name) { try { return JSON.parse(localStorage.getItem(key(name)) || '[]'); } catch { return []; } }
  function saveState() { localStorage.setItem(key('completedLessons'), JSON.stringify(state.completed)); localStorage.setItem(key('bookmarkedLessons'), JSON.stringify(state.bookmarks)); }
  function addXP(amount) { const xp=Number(localStorage.getItem('lingosphere.xp')||0); localStorage.setItem('lingosphere.xp',String(xp+amount)); }
  function showToast(title, message) { if(window.LS?.Toast?.show) window.LS.Toast.show(message ? `${title}. ${message}` : title); else console.log(title,message||''); }

  function renderList() {
    const list=$('lessonList'); if(!list) return;
    list.innerHTML=lessons().map((lesson,index)=>{
      const done=state.completed.includes(index), active=index===state.current, locked=index>0&&!state.completed.includes(index-1)&&!done;
      return `<button class="lesson-list-item ${active?'active':''} ${done?'completed':''}" data-index="${index}" ${locked?'disabled':''}><span class="lesson-list-number">${String(index+1).padStart(2,'0')}</span><span class="lesson-list-copy"><strong>${lesson.title}</strong><small>${lesson.type}</small></span><span class="lesson-list-status"><i class="bi ${done?'bi-check-circle-fill':locked?'bi-lock-fill':'bi-circle'}"></i></span></button>`;
    }).join('');
    list.querySelectorAll('[data-index]').forEach(btn=>btn.addEventListener('click',()=>loadLesson(Number(btn.dataset.index))));
  }


  function renderWritingLesson(lesson) {
    const answerGrid = $('answerGrid');
    const prompt = $('practicePanel')?.querySelector('.practice-heading h3');
    if (prompt) prompt.textContent = lesson.prompt;
    if (answerGrid) {
      answerGrid.innerHTML = `
        <div class="writing-answer-wrap">
          <textarea id="writingAnswer" class="writing-answer" rows="5" placeholder="Tulis terjemahan bahasa Inggris Anda di sini..."></textarea>
          <div class="writing-answer-meta"><span>Write in English</span><span id="writingWordCount">0 words</span></div>
        </div>`;
      const input = $('writingAnswer');
      input?.addEventListener('input', () => {
        const words = input.value.trim() ? input.value.trim().split(/\s+/).length : 0;
        $('writingWordCount').textContent = `${words} words`;
        $('nextBtn').disabled = !input.value.trim();
      });
    }
    $('practicePanel')?.classList.add('writing-practice');
  }

  function normalizeWriting(text) {
    return text.toLowerCase()
      .replace(/[“”"'.!,?;:()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function scoreWriting(answer, lesson) {
    const normalized = normalizeWriting(answer);
    const expected = lesson.phrases?.[0]?.[1] || '';
    const expectedWords = normalizeWriting(expected).split(' ').filter(Boolean);
    const answerWords = normalized.split(' ').filter(Boolean);
    const answerSet = new Set(answerWords);
    const matched = expectedWords.filter(word => answerSet.has(word)).length;
    const coverage = expectedWords.length ? matched / expectedWords.length : 0;
    const exact = normalized === normalizeWriting(expected);
    let score = Math.round(coverage * 80);
    if (exact) score = 100;
    else if (coverage >= .9) score = 95;
    else if (coverage >= .75) score = 85;
    else if (coverage >= .6) score = 70;

    const missing = [...new Set(expectedWords.filter(word => !answerSet.has(word)))].slice(0, 5);
    return { score, exact, expected, missing };
  }

  function normalizeSpeech(text) {
    return String(text || '').toLowerCase()
      .replace(/[“”"'.,!?;:()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function wordSimilarity(a, b) {
    if (a === b) return 1;
    if (!a || !b) return 0;
    const prev = Array.from({length: b.length + 1}, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(
          cur[j - 1] + 1,
          prev[j] + 1,
          prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
      for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return Math.max(0, 1 - prev[b.length] / Math.max(a.length, b.length));
  }

  function scoreSpeech(transcript, lesson) {
    const targetWords = normalizeSpeech(lesson.readingText || lesson.example).split(' ').filter(Boolean);
    const spokenWords = normalizeSpeech(transcript).split(' ').filter(Boolean);
    if (!spokenWords.length) return {score: 0, matched: 0, total: targetWords.length, missing: targetWords.slice(0, 6)};

    const used = new Set();
    let total = 0;
    let matched = 0;
    targetWords.forEach(target => {
      let best = 0;
      let bestIndex = -1;
      spokenWords.forEach((spoken, index) => {
        if (used.has(index)) return;
        const sim = wordSimilarity(target, spoken);
        if (sim > best) { best = sim; bestIndex = index; }
      });
      total += best;
      if (bestIndex >= 0 && best >= 0.62) {
        used.add(bestIndex);
        matched += 1;
      }
    });

    const coverage = matched / targetWords.length;
    const similarity = total / targetWords.length;
    const extraPenalty = Math.max(0, spokenWords.length - targetWords.length) / Math.max(targetWords.length, 1);
    const score = Math.max(0, Math.min(100, Math.round((coverage * 55 + similarity * 45) * (1 - Math.min(extraPenalty * 0.12, 0.12)))));
    const missing = targetWords.filter((word, i) => {
      const prefix = targetWords.slice(0, i);
      return !spokenWords.some(spoken => wordSimilarity(word, spoken) >= 0.62);
    }).slice(0, 6);
    return {score, matched, total: targetWords.length, missing};
  }

  function resetSpeakingSession() {
    speakingState.sessionId += 1;
    if (speakingState.timer) clearInterval(speakingState.timer);
    speakingState.timer = null;
    if (speakingState.recognition) {
      try { speakingState.recognition.stop(); } catch {}
    }
    if (speakingState.recorder && speakingState.recorder.state !== 'inactive') {
      try { speakingState.recorder.stop(); } catch {}
    }
    speakingState.stream?.getTracks().forEach(track => track.stop());
    if (speakingState.blobUrl) URL.revokeObjectURL(speakingState.blobUrl);
    speakingState.recorder = null;
    speakingState.stream = null;
    speakingState.recognition = null;
    speakingState.seconds = 0;
    speakingState.transcript = '';
    speakingState.blobUrl = '';
    speakingState.score = null;
    speakingState.recording = false;
  }

  function formatTime(seconds) {
    return `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`;
  }

  function updateSpeakingUI() {
    const status = $('speakingStatus');
    const timer = $('speakingTimer');
    const recordBtn = $('recordSpeakingBtn');
    const transcript = $('speakingTranscript');
    const score = $('speakingScore');
    if (timer) timer.textContent = formatTime(speakingState.seconds);
    if (status) status.textContent = speakingState.recording ? 'Recording your voice...' : speakingState.score !== null ? 'Pronunciation checked' : speakingState.supported ? 'Ready to record' : 'Speech recognition is not supported';
    if (recordBtn) {
      recordBtn.innerHTML = speakingState.recording
        ? '<i class="bi bi-stop-fill"></i><span>Stop recording</span>'
        : '<i class="bi bi-mic-fill"></i><span>Start recording</span>';
      recordBtn.classList.toggle('recording', speakingState.recording);
    }
    if (transcript) transcript.textContent = speakingState.transcript || 'Your transcript will appear here after recording.';
    if (score && speakingState.score !== null) {
      score.hidden = false;
      score.querySelector('[data-score]')?.replaceChildren(document.createTextNode(`${speakingState.score.score}/100`));
      score.querySelector('[data-score-label]')?.replaceChildren(document.createTextNode(speakingState.score.score >= 80 ? 'Great pronunciation' : speakingState.score.score >= 65 ? 'Good effort' : 'Keep practicing'));
    } else if (score) {
      score.hidden = true;
    }
  }

  async function finishSpeakingRecording(lesson) {
    if (!speakingState.transcript) {
      $('feedback').hidden = false;
      $('feedback').className = 'lesson-feedback bad';
      $('feedback').textContent = 'We could not detect your speech. Try speaking closer to the microphone and record again.';
      updateSpeakingUI();
      return;
    }
    speakingState.score = scoreSpeech(speakingState.transcript, lesson);
    const good = speakingState.score.score >= 70;
    $('feedback').hidden = false;
    $('feedback').className = `lesson-feedback ${good ? 'good' : 'bad'}`;
    $('feedback').textContent = good
      ? `Pronunciation score: ${speakingState.score.score}/100. Your speech is close to the target text.`
      : `Pronunciation score: ${speakingState.score.score}/100. Try again and focus on the highlighted words and your pace.`;

    if (speakingState.blobUrl) {
      const player = $('speakingPlayback');
      if (player) { player.src = speakingState.blobUrl; player.hidden = false; }
    }
    updateSpeakingUI();
    if (good) {
      if (!state.completed.includes(state.current)) {
        state.completed.push(state.current);
        saveState();
        addXP(20);
      }
      renderList();
      $('nextBtn').disabled = false;
      $('nextBtn').classList.remove('retry');
      $('nextBtn').innerHTML = state.current === lessons().length - 1 ? 'Finish course <i class="bi bi-trophy-fill"></i>' : 'Next lesson <i class="bi bi-arrow-right"></i>';
    } else {
      $('nextBtn').disabled = false;
      $('nextBtn').classList.add('retry');
      $('nextBtn').innerHTML = 'Record again <i class="bi bi-arrow-counterclockwise"></i>';
    }
  }

  async function startSpeakingRecording(lesson) {
    resetSpeakingSession();
    const sessionId = speakingState.sessionId;
    if (!speakingState.supported) {
      $('feedback').hidden = false;
      $('feedback').className = 'lesson-feedback bad';
      $('feedback').textContent = 'This browser does not support speech recognition. Open the project in Chrome for the pronunciation prototype.';
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      speakingState.stream = stream;
      const chunks = [];
      const recorder = new MediaRecorder(stream);
      speakingState.recorder = recorder;
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = () => {
        if (sessionId !== speakingState.sessionId) return;
        const blob = new Blob(chunks, {type: recorder.mimeType || 'audio/webm'});
        if (speakingState.blobUrl) URL.revokeObjectURL(speakingState.blobUrl);
        speakingState.blobUrl = URL.createObjectURL(blob);
        stream.getTracks().forEach(track => track.stop());
        speakingState.stream = null;
        finishSpeakingRecording(lesson);
      };

      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new Recognition();
      speakingState.recognition = recognition;
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = event => {
        let finalText = '';
        let interimText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const text = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalText += `${text} `;
          else interimText += text;
        }
        speakingState.transcript = `${finalText}${interimText}`.trim();
        updateSpeakingUI();
      };
      recognition.onerror = event => {
        if (event.error !== 'aborted' && event.error !== 'no-speech') {
          $('feedback').hidden = false;
          $('feedback').className = 'lesson-feedback bad';
          $('feedback').textContent = `Speech recognition error: ${event.error}. Try recording again.`;
        }
      };
      recognition.onend = () => {
        if (speakingState.recording) {
          try { recognition.start(); } catch {}
        }
      };

      recorder.start();
      recognition.start();
      speakingState.recording = true;
      speakingState.seconds = 0;
      speakingState.timer = setInterval(() => { speakingState.seconds += 1; updateSpeakingUI(); }, 1000);
      $('feedback').hidden = true;
      $('nextBtn').disabled = true;
      updateSpeakingUI();
    } catch (error) {
      speakingState.recording = false;
      $('feedback').hidden = false;
      $('feedback').className = 'lesson-feedback bad';
      $('feedback').textContent = error?.name === 'NotAllowedError' ? 'Microphone access was denied. Allow microphone access and try again.' : 'Could not start the microphone. Please try again.';
      updateSpeakingUI();
    }
  }

  function stopSpeakingRecording() {
    speakingState.recording = false;
    if (speakingState.timer) clearInterval(speakingState.timer);
    speakingState.timer = null;
    try { speakingState.recognition?.stop(); } catch {}
    if (speakingState.recorder && speakingState.recorder.state !== 'inactive') speakingState.recorder.stop();
    updateSpeakingUI();
  }

  function renderSpeakingLesson(lesson) {
    resetSpeakingSession();
    $('practicePanel')?.classList.add('speaking-practice');
    $('answerGrid').innerHTML = `
      <div class="speaking-practice-card">
        <div class="speaking-read-label"><i class="bi bi-bookmark-fill"></i><span>READ ALOUD</span></div>
        <div class="speaking-read-text">${lesson.readingText || lesson.example}</div>
        <div class="speaking-instruction"><i class="bi bi-info-circle"></i><span>Read the text naturally. Your microphone and browser speech recognition will compare your pronunciation with the target.</span></div>
        <div class="speaking-recorder">
          <div class="speaking-recorder-top">
            <div><strong id="speakingStatus">${speakingState.supported ? 'Ready to record' : 'Speech recognition is not supported'}</strong><span id="speakingTimer">00:00</span></div>
            <div class="speaking-level" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <button id="recordSpeakingBtn" class="speaking-record-btn" type="button" ${speakingState.supported ? '' : 'disabled'}><i class="bi bi-mic-fill"></i><span>Start recording</span></button>
          <audio id="speakingPlayback" controls hidden></audio>
        </div>
        <div class="speaking-transcript-box">
          <div class="speaking-transcript-head"><span>YOUR TRANSCRIPT</span><span>Speech recognition</span></div>
          <p id="speakingTranscript">Your transcript will appear here after recording.</p>
        </div>
        <div class="speaking-score" id="speakingScore" hidden>
          <div class="speaking-score-number" data-score>0/100</div>
          <div><strong data-score-label>Pronunciation checked</strong><span>Based on transcript similarity</span></div>
        </div>
      </div>`;

    $('recordSpeakingBtn')?.addEventListener('click', () => {
      if (speakingState.recording) stopSpeakingRecording();
      else startSpeakingRecording(lesson);
    });
    updateSpeakingUI();
  }

  function renderLesson() {
    const list=lessons(); state.current=Math.min(Math.max(state.current,0),list.length-1); const lesson=list[state.current];
    $('courseName').textContent=state.course; $('lessonNumber').textContent=state.current+1; $('lessonTotal').textContent=list.length;
    $('lessonTitle').textContent=lesson.title; $('stageNumber').textContent=String(state.current+1).padStart(2,'0'); $('lessonContext').textContent=lesson.context;
    $('stageTitle').textContent=lesson.description.split('. ')[0]+'.'; $('stageDescription').textContent=lesson.description; $('lessonType').innerHTML=`<i class="bi ${lesson.icon}"></i> ${lesson.type}`;
    const ep=$('examplePanel'), pp=$('practicePanel');
    pp?.classList.remove('writing-practice','speaking-practice');
    if (lesson.type === 'Writing') { renderWritingLesson(lesson); }
    if (lesson.type === 'Speaking') { renderSpeakingLesson(lesson); } const speaker=ep?.querySelector('.example-speaker span'), example=ep?.querySelector('.example-speaker strong'), prompt=pp?.querySelector('.practice-heading h3');
    if(speaker) speaker.textContent=lesson.speaker; if(example) example.textContent=lesson.example; if(prompt) prompt.textContent=lesson.prompt;
    $('lessonObjectives').innerHTML=lesson.objectives.map(x=>`<li><i class="bi bi-check2-circle"></i><span>${x}</span></li>`).join('');
    $('vocabularyGrid').innerHTML=lesson.vocabulary.map(([w,m])=>`<div class="vocab-item"><strong>${w}</strong><span>${m}</span></div>`).join(''); $('vocabularyCount').textContent=`${lesson.vocabulary.length} words`;
    $('phraseList').innerHTML=lesson.phrases.map(([q,a])=>`<div class="phrase-item"><span>${q}</span><strong>${a}</strong></div>`).join('');
    const tip=$('lessonTip')?.querySelector('span'); if(tip) tip.textContent=lesson.tip;
    if (lesson.type !== 'Writing' && lesson.type !== 'Speaking') {
      $('answerGrid').innerHTML=lesson.answers.map((a,i)=>`<button class="answer-btn" type="button" data-index="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${a}</span></button>`).join('');
    }
    state.selected=null; state.checked=false; $('nextBtn').disabled=true; $('nextBtn').classList.remove('retry'); $('nextBtn').innerHTML='Check answer <i class="bi bi-check2"></i>';
    $('feedback').hidden=true; $('feedback').className='lesson-feedback'; $('feedback').textContent='';
    const bookmarked=state.bookmarks.includes(state.current); $('bookmarkBtn').innerHTML=`<i class="bi ${bookmarked?'bi-bookmark-fill':'bi-bookmark'}"></i>`; $('bookmarkBtn').setAttribute('aria-pressed',String(bookmarked));
    const percent=Math.round((state.completed.length/list.length)*100); $('progressPercent').textContent=`${percent}%`; $('progressBar').style.width=`${percent}%`; $('completedCount').textContent=`${state.completed.length} / ${list.length}`; $('xpValue').textContent=`+${20+state.current*5} XP`;
    if (lesson.type !== 'Writing' && lesson.type !== 'Speaking') {
      $('answerGrid').querySelectorAll('.answer-btn').forEach(btn=>btn.addEventListener('click',()=>selectAnswer(Number(btn.dataset.index))));
    }
    renderList();
  }

  function selectAnswer(i) { if(state.checked)return; state.selected=i; document.querySelectorAll('.answer-btn').forEach(b=>b.classList.toggle('selected',Number(b.dataset.index)===i)); $('nextBtn').disabled=false; $('nextBtn').innerHTML='Check answer <i class="bi bi-check2"></i>'; }
  function resetQuestion() { state.selected=null; state.checked=false; document.querySelectorAll('.answer-btn').forEach(b=>b.classList.remove('selected','correct','wrong')); $('feedback').hidden=true; $('feedback').className='lesson-feedback'; $('nextBtn').disabled=true; $('nextBtn').classList.remove('retry'); $('nextBtn').innerHTML='Check answer <i class="bi bi-check2"></i>'; }
  function loadLesson(index) { if(index<0||index>=lessons().length)return; if (speakingState.recording) stopSpeakingRecording(); if(index!==state.current&&index>0&&!state.completed.includes(index-1)){showToast('Lesson locked','Complete the previous lesson first.');return;} state.current=index; history.replaceState(null,'',`lesson.html?course=${encodeURIComponent(state.course)}&lesson=${index+1}`); renderLesson(); window.scrollTo({top:0,behavior:'smooth'}); }
  function checkAnswer() {
    const lesson=lessons()[state.current];
    if (lesson.type === 'Speaking') {
      if (speakingState.score && speakingState.score.score >= 70) {
        if (state.current < lessons().length - 1) loadLesson(state.current + 1);
        else { showToast('Lessons complete','Your final course test is ready.'); setTimeout(()=>window.location.href=`course-test.html?course=${encodeURIComponent(state.course)}`,700); }
      } else {
        if (speakingState.recording) stopSpeakingRecording();
        else startSpeakingRecording(lesson);
      }
      return;
    }
    if (lesson.type === 'Writing') {
      const input = $('writingAnswer');
      const answer = input?.value.trim() || '';
      if (!answer) return;
      const result = scoreWriting(answer, lesson);
      state.checked = true;
      const passed = result.score >= 70;
      $('feedback').hidden = false;
      $('feedback').className = `lesson-feedback ${passed ? 'good' : 'bad'}`;
      let message = `${result.score}/100. ${passed ? 'Good translation.' : 'Keep practicing.'} Expected answer: “${result.expected}”.`;
      if (result.missing.length && !result.exact) message += ` Check these words: ${result.missing.join(', ')}.`;
      $('feedback').textContent = message;
      if (passed) {
        if (!state.completed.includes(state.current)) {
          state.completed.push(state.current);
          saveState();
          addXP(20);
        }
        renderList();
        $('nextBtn').disabled = false;
        $('nextBtn').classList.remove('retry');
        $('nextBtn').innerHTML = state.current===lessons().length-1 ? 'Finish course <i class="bi bi-trophy-fill"></i>' : 'Next lesson <i class="bi bi-arrow-right"></i>';
      } else {
        $('nextBtn').disabled = false;
        $('nextBtn').classList.add('retry');
        $('nextBtn').innerHTML = 'Try again <i class="bi bi-arrow-counterclockwise"></i>';
      }
      return;
    }
    if(state.selected===null)return; const buttons=[...document.querySelectorAll('.answer-btn')], good=state.selected===lesson.correct;
    if(!state.checked){ state.checked=true; buttons[lesson.correct]?.classList.add('correct'); if(!good)buttons[state.selected]?.classList.add('wrong'); $('feedback').hidden=false; $('feedback').className=`lesson-feedback ${good?'good':'bad'}`; $('feedback').textContent=good?'Correct. Nice work. +20 XP earned.':`Not quite. The best answer is “${lesson.answers[lesson.correct]}”. Try again.`;
      if(good){ if(!state.completed.includes(state.current)){state.completed.push(state.current);saveState();addXP(20);} renderList(); $('nextBtn').disabled=false; $('nextBtn').classList.remove('retry'); $('nextBtn').innerHTML=state.current===lessons().length-1?'Finish course <i class="bi bi-trophy-fill"></i>':'Next lesson <i class="bi bi-arrow-right"></i>'; } else { $('nextBtn').disabled=false; $('nextBtn').classList.add('retry'); $('nextBtn').innerHTML='Try again <i class="bi bi-arrow-counterclockwise"></i>'; } return; }
    if(!good){resetQuestion();return;} if(state.current<lessons().length-1){loadLesson(state.current+1);return;} showToast('Lessons complete','Your final course test is ready.'); setTimeout(()=>window.location.href=`course-test.html?course=${encodeURIComponent(state.course)}`,700);
  }
  $('nextBtn')?.addEventListener('click',checkAnswer); $('backBtn')?.addEventListener('click',()=>window.location.href='courses.html'); $('skipBtn')?.addEventListener('click',()=>showToast('Saved for later','You can return to this lesson from the course map.')); $('audioBtn')?.addEventListener('click',()=>{
    const lesson=lessons()[state.current];
    if (lesson.type === 'Speaking' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance=new SpeechSynthesisUtterance(lesson.readingText || lesson.example);
      utterance.lang='en-US'; utterance.rate=.9; window.speechSynthesis.speak(utterance);
    } else showToast('Audio practice','Audio playback will be connected in the next integration step.');
  });
  $('bookmarkBtn')?.addEventListener('click',()=>{const i=state.current,has=state.bookmarks.includes(i);state.bookmarks=has?state.bookmarks.filter(x=>x!==i):[...state.bookmarks,i];saveState();renderLesson();showToast(has?'Bookmark removed':'Lesson bookmarked');});
  $('themeBtn')?.addEventListener('click',()=>window.LS?.ThemeManager?.toggle?.());
  renderLesson();
})();
