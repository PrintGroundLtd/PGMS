using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PGMS.Erp.Entities
{
    public class OrdersPerStatusResponse
    {
        public OrdersPerStatusResponse()
        {
            labels = new List<string>();
            datasets = new List<Dataset>();
        }

        public List<string> labels { get; set; }

        public List<Dataset> datasets { get; set; }

        public class Dataset
        {
            public bool fill { get; set; }

            public Dataset()
            {
                data = new List<decimal>();
            }
            public string label { get; set; }

            public List<decimal> data { get; set; }

            public string backgroundColor { get; set; }

            public string borderColor { get; set; }
        }
    }
}
