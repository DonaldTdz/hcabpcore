﻿using HC.WeChat.MessageHandler;
using HC.WeChat.Models.WeChat;
using HC.WeChat.WechatAppConfigs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Controllers
{
    [Route("[controller]/[action]")]
    public class GuangAnWeChatController : WeChatMessageHandlerControllerBase
    {
        private int? tenantId;

        public GuangAnWeChatController(IMessageHandlerAppServer messageHandlerAppServer,
           IWechatAppConfigAppService wechatAppConfigAppService
           ) : base(messageHandlerAppServer, wechatAppConfigAppService)
        {
            InitAppConfigSetting();
        }

        protected override int? GetTenantId()
        {
            return tenantId;
        }
    }

   
}
