import { makeAutoObservable,runInAction } from 'mobx';


class HomeStore {
    count = 1;
    constructor() {
        // mobx6.0后的版本都需要手动调用makeObservable(this)，不然会发现数据变了视图不更新
        makeAutoObservable(this); 
      }
    get double(){
        return this.count*2;
    }
    increase = () => {
        this.count += 1;
    }
    decrease = () =>{
        this.count -= 1;
    }
    getApi = async () =>{
        const count = await new Promise<number>((resolve, reject) => {
            setTimeout(() => resolve(30),20)  
        })
        // 获取数据后，将赋值操作放到 runInAction 中
        runInAction(()=>{this.count -= count;});
    }
}

export default HomeStore


