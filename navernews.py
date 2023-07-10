#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
from bs4 import BeautifulSoup as bs

 

url = 'https://www.naver.com/'

response = requests.get(url)

 

if response.status_code == 200:
    html = response.text
    soup = bs(html, 'html.parser')
    print(soup)
else :
    print(response.status_code)
    


# In[4]:


attr = soup.select('img.news_logo')
for img in attr:
    alt = img.get('alt')
    if alt:        print(alt)
        


# In[ ]:




