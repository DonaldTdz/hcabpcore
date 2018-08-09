using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using HC.WeChat.Authorization.Roles;
using HC.WeChat.Authorization.Users;
using HC.WeChat.MultiTenancy;

namespace HC.WeChat.EntityFrameworkCore
{
    public class WeChatDbContext : AbpZeroDbContext<Tenant, Role, User, WeChatDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public WeChatDbContext(DbContextOptions<WeChatDbContext> options)
            : base(options)
        {
        }
    }
}
