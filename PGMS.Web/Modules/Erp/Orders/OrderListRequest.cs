using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Services;

namespace PGMS.Erp
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductId { get; set; }
    }
}
