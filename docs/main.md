### 资源meta

```json
{
    "name" : "user",
    "namespace" : "default",
    "remark" : "用户资源",
    "version" : "1.0.0",
    "access" :  "public|private|protected",
    "tags" :[],
    "body" : {
        
    }
}
```

### 资源map

```js
{
    
}
```



### dmine

```js
var DMINE =  require('dmine.js')
var dm = DMINE.DMINE
var d = dson = DMINE.DSON
var j = jvd = DMINE.JVD

dm().meta('user').get({ name : 'LiSA'})
dm('user').get( {minAge : 10})
dm({name : "user" , remark : '用户资源'}).create({ name : "LiSA" , age : 32 , gender : 2})
dm().delete()
dm().update()



```

