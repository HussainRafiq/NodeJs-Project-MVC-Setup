const fs = require("fs");
export class Configuration {
    Key:string = null;
    Value:Object = null;   
    constructor() {
    } 

    GetSection(key:string=null): Configuration
    {
        if (this.Value == null) {
          this.ReadData();
        }
        if(key==null)
            return this;
        this.Key=key;
        var keys=key.split(":");
        var checkingKey = keys.filter(x=>x!=null);
        checkingKey.forEach(key => {
            if(this.Value)
                this.Value = this.Value[key];
        });
        
        return this;
    }

    private ReadData(){
        var self=this;
        const configFile = fs.readFileSync("./appSetting.json", 'utf-8');
        self.Value=JSON.parse(configFile);
          
    }
}




