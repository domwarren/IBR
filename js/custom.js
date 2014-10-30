jQuery(function ($) {

    var JobSearchLink = $('#lnkJobSearch');

    if (JobSearchLink.length) {

        function getJobSearchURL() {
            var baseURL = "job-search.html?";
            var urlQuery = "";
            var cAdded = false;
            var jobType = $('#dllType').val();
            var jobTArea = $('#ddlArea').val();
            var jobKW = $('#al_keywords').val();

            if (jobType != "") {
                cAdded = true;
                urlQuery += "c=" + jobType;
            }
            if (jobTArea != "") {
                if (cAdded)
                    urlQuery += "," + jobTArea;
                else
                    urlQuery += "c=" + jobTArea;

                cAdded = true;
            }
            if (jobKW != "") {
                if (cAdded)
                    urlQuery += "&k=" + encodeURIComponent(jobKW);
                else
                    urlQuery += "k=" + encodeURIComponent(jobKW);
            }

            return baseURL + urlQuery;
        }

        JobSearchLink.attr("href", getJobSearchURL());
        $('#dllType').change(function () {
            JobSearchLink.attr("href", getJobSearchURL());
        });
        $('#ddlArea').change(function () {
            JobSearchLink.attr("href", getJobSearchURL());
        });

        JobSearchLink.bind("click", function (evt) {
            JobSearchLink.attr("href", getJobSearchURL());
        });
    }

    var jobSearchIFrame = $('#JobSearchForm');

    if (jobSearchIFrame.length) {
        if (window.location.search.length > 0)
            jobSearchIFrame.attr("src", "http://my.jobadder.com/iframe/jobsearch/jobsearch.aspx?iframeID=220" + "&" + window.location.search.substring(1));
        else
            jobSearchIFrame.attr("src", "http://my.jobadder.com/iframe/jobsearch/jobsearch.aspx?iframeID=220");
    }
});