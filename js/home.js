(function () {
    var services = [
        { no: '01', title: 'AI Applications', body: 'Production ML and LLM systems for automation, forecasting, and decision support — shipped, monitored, and owned end to end.' },
        { no: '02', title: 'Robotics & Autonomy', body: 'Perception, control, and navigation stacks for machines that operate without a human in the loop.' },
        { no: '03', title: 'Web & Product Engineering', body: 'Scalable platforms and internal tools built on clean architecture and real observability.' },
        { no: '04', title: 'Applied Research', body: 'Deep-sea-inspired autonomy: adaptive learning, sensor fusion, and intelligence at the edge.' },
        { no: '05', title: 'Digital Marketing', body: 'Social media, content, and campaign strategy that grows local businesses and digital brands.' }
    ];

    var projects = [
        { tag: 'COMPUTER VISION', title: 'AI Vision System', body: 'Real-time detection and tracking deployed at the edge for industrial inspection.', caption: '// ROV inspection feed' },
        { tag: 'ROBOTICS', title: 'Autonomous Unit', body: 'A self-navigating robotic platform for precision tasks in unstructured environments.', caption: '// field robot telemetry' },
        { tag: 'RESEARCH', title: 'DeepSee Neural Engine', body: 'An adaptive inference engine modeled on deep-sea sensory systems.', caption: '// bathymetric map' }
    ];

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function renderServices() {
        var el = document.getElementById('services-grid');
        if (!el) return;
        el.innerHTML = services.map(function (s) {
            return '<div class="service-card">' +
                '<div class="service-head">' +
                    '<div class="service-chip">' + s.no + '</div>' +
                    '<h3>' + escapeHtml(s.title) + '</h3>' +
                '</div>' +
                '<p>' + escapeHtml(s.body) + '</p>' +
            '</div>';
        }).join('');
    }

    function renderProjects() {
        var el = document.getElementById('projects-grid');
        if (!el) return;
        el.innerHTML = projects.map(function (p) {
            return '<div class="project-card">' +
                '<div class="project-img">' +
                    '<div class="ring"></div>' +
                    '<span class="caption">' + escapeHtml(p.caption) + '</span>' +
                '</div>' +
                '<div class="project-body">' +
                    '<span class="project-tag">' + escapeHtml(p.tag) + '</span>' +
                    '<h3>' + escapeHtml(p.title) + '</h3>' +
                    '<p>' + escapeHtml(p.body) + '</p>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    function renderParticles() {
        var el = document.getElementById('particles');
        if (!el) return;

        var seed = 47;
        function rnd() {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        }

        var html = '';
        for (var i = 0; i < 22; i++) {
            var size = (2 + rnd() * 3).toFixed(1);
            var left = (rnd() * 100).toFixed(1);
            var top = (rnd() * 100).toFixed(1);
            var opacity = (0.4 + rnd() * 0.5).toFixed(2);
            var duration = (7 + rnd() * 9).toFixed(1);
            var delay = (rnd() * 10).toFixed(1);
            html += '<div class="particle" style="left:' + left + '%;top:' + top + '%;width:' + size + 'px;height:' + size + 'px;--o:' + opacity + ';animation-duration:' + duration + 's;animation-delay:-' + delay + 's;"></div>';
        }
        el.innerHTML = html;
    }

    renderServices();
    renderProjects();
    renderParticles();
})();
