GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function PageViewModel(){const inner=PageViewModel.__inner__;if(this==__global__){return new PageViewModel({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);PageViewModel.prototype.ctor.apply(this,args);return this;}}PageViewModel.__inner__=function inner(){this.imagePath='';this.title='';};PageViewModel.prototype={};PageViewModel.prototype.ctor=function(){};function _PageViewTemplateState(){const inner=_PageViewTemplateState.__inner__;if(this==__global__){return new _PageViewTemplateState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_PageViewTemplateState.prototype.ctor.apply(this,args);return this;}}_PageViewTemplateState.__inner__=function inner(){this._listData=[];this._page=0;};_PageViewTemplateState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){requestData();}},onUnload:function onUnload(){const __thiz__=this;with(__thiz__){}},requestData:function requestData(){const __thiz__=this;with(__thiz__){_page++;FairNet().requestData(convertObjectLiteralToSetOrMap({['pageName']:'#FairKey#',['method']:'GET',['url']:'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/81900c8ba18b20328389b43c729a251e_tabbar_data.json',['data']:convertObjectLiteralToSetOrMap({['page']:_page,}),['success']:function dummy(resp){if(resp==null){return null;}let data=resp.__op_idx__('data');data.forEach(function dummy(item){let dataItem=PageViewModel();try{dataItem.imagePath=item.imageUrl;dataItem.title=item.title;}catch(e){dataItem.imagePath=item.__op_idx__('imageUrl');dataItem.title=item.__op_idx__('title');}_listData.add(dataItem);});setState('#FairKey#',function dummy(){});},}));}},isDataEmpty:function isDataEmpty(){const __thiz__=this;with(__thiz__){return _listData.isEmpty;}},_getImagePath:function _getImagePath(index){const __thiz__=this;const __arg_ctx__={index,};with(__thiz__){with(__arg_ctx__){return _listData.__op_idx__(index).imagePath;}}},_getText:function _getText(index){const __thiz__=this;const __arg_ctx__={index,};with(__thiz__){with(__arg_ctx__){return _listData.__op_idx__(index).title;}}},};_PageViewTemplateState.prototype.ctor=function(){};;return _PageViewTemplateState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));