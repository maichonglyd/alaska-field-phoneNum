/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';
import React from 'react';
import TextField from 'material-ui/lib/text-field';
const TYPE_MOBILE = "mobile";
const TYPE_TEL = "tel";
const TYPE_ALL = "all";
export default class View extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hintText:props.hintText || "",
      disabled:props.disabled || false,
      errorText:"",
      recognition:props.recognition || TYPE_MOBILE,
      fullWidth:props.fullWidth || false,
      value:props.value || "",
      onChange:props.onChange
    };
    this.errText = props.errorText || "";
  }
  _onBlurHandle(event){
    let value=event.target.value.trim();
    let reg=/^1((3[0-9])|(4[57])|(5[01256789])|(7[0678])|(8[0-8]))[0-9]{8}$/g;
    let reg1=/^0[1-9][0-9][-]?[0-9]{8}$/g;
    let reg2=/^0[1-9][0-9]{2}[-]?[0-9]{7,8}$/g;
    let result = false;
    if(this.state.recognition == TYPE_ALL){
      result = (value != "" && !reg.test(value) && !reg1.test(value) && !reg2.test(value));
    }else if(this.state.recognition == TYPE_MOBILE){
      result = (value != "" && !reg.test(value))
    }else if(this.state.recognition = TYPE_TEL){
      result = (value != "" && !reg1.test(value) && !reg2.test(value));
    }
    if(result){
      this.setState({errorText:this.errText==""?"号码格式不正确！":this.errText});
    }else{
      this.setState({errorText:""});
    }
  }
  _onChangeHandle(event){
    let value = event.target.value;
    if(value.trim().length>0){
      let news = value.substr(-1,1);
      let reg=/[0-9]/g;
      if(!reg.test(news)){
        value = value.substr(0,value.length-1);
      }
    }
    this.setState({value:value});
    if(typeof this.state.onChange == "function"){
      this.state.onChange(event);
    }
  }
  _onFocusHandle(){
    this.setState({errorText:""});
  }
  render(){
    return <TextField
      hintText={this.state.hintText}
      disabled={this.state.disabled}
      errorText={this.state.errorText}
      fullWidth={this.state.fullWidth}
      value={this.state.value}
      onBlur={this._onBlurHandle.bind(this)}
      onChange={this._onChangeHandle.bind(this)}
      onFocus={this._onFocusHandle.bind(this)}
    />
  }
}
