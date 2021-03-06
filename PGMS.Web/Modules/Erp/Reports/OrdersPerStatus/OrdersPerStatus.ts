﻿declare var Chart: any;

namespace PGMS.Erp {

    export class OrdersPerStatus extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.OrdersPerStatus({},
                response => {
                    var config = {
                        type: 'line',
                        data: {
                            datasets: response.Entity.datasets,
                            labels: response.Entity.labels
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: true
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            //  labelString: 'Month'
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            //    labelString: 'Value'
                                        }
                                    }
                                ]
                            }
                        },
                    };

                    var ctx = $(this.byId("IncomeVSExpense")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);
                });
        }
    }
}